// src/settings.js
export const Settings = {
  config: {
    // ★ あなたの Camera Kit API トークン
    // Snap Camera Kit の管理画面から取得してください
    // https://camera-kit.snapchat.com/
    apiToken: "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzY1MjU2NTU0LCJzdWIiOiIzZDZjMjc2NC1iZjI1LTRkNWMtOGEwMy05NzdlYWQzYTc4NTR-U1RBR0lOR343MzUxY2UxMi1jMDQzLTQ4N2QtOGViMi05NGMzMjkxNjM4MTQifQ.SekVULfmoM8eRlOImpcEBKFApHdUIuQMxPdmA6EJSrM",

    // ★ レンズ指定（固定）
    // 使用したいLensのIDとGroup IDを指定してください
    // Lens Studioで公開したLensのIDを取得して設定します
    lensID:  "0af34dfa-8983-4560-b6d5-aa0e6b7360e6",
    groupID: "d9065daf-a28a-4712-ad07-bdd2e1891b22",

    // ★ Remote API の Spec（Snapの管理画面のID）
    // Remote APIを使用する場合のみ設定してください
    // 使用しない場合は useRemoteAPI: false に設定
    remoteAPISpecId: "YOUR_REMOTE_API_SPEC_ID_HERE",

    // 既定のリダイレクト先（URLパラメータ ?redirect= で上書き可）
    // Remote APIでマーカー検出時にリダイレクトするURL
    redirectUrl: "https://example.com/",

    // Remote API を有効化
    // true: Remote APIを使用（remoteAPI.jsが必要）
    // false: Remote APIを使用しない（通常のLensのみ）
    useRemoteAPI: false,
  },
  camera: {
    fps: 30,
  },
  recording: {
    recordCaptureRenderTarget: false,
    recordMicAudio: false,
    recordLensAudio: true,  // MP4音声を有効化
  },
};
