import React, { useEffect } from 'react';
import JitsiMeet, { JitsiMeetView, } from 'react-native-jitsi-meet';

function Video() {

  useEffect(() => {
    setTimeout(() => {
      const url = 'https://meet.jit.si/UniqueLecturesSplitHardly';
      const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      JitsiMeet.call(url, userInfo);
    }, 1000);
  }, [])

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  });

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log('Meeting ended')
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log('Meeting Joined')
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log('Meeting Before Join')
  }
  return (
    <JitsiMeetView
      onConferenceTerminated={e => onConferenceTerminated(e)}
      onConferenceJoined={e => onConferenceJoined(e)}
      onConferenceWillJoin={e => onConferenceWillJoin(e)}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
    />
  )
}
export default Video;