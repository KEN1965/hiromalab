import { bootstrapCameraKit } from "https://cdn.jsdelivr.net/npm/@snap/camera-kit@latest";

async function startAR() {
    const apiToken = "あなたのAPIキー";
    const lensGroupId = "あなたのレンズグループID";

    const cameraKit = await bootstrapCameraKit({ apiToken });
    const session = await cameraKit.createSession();

    const videoEl = document.getElementById("camera");
    await session.setSource(videoEl);

    const lensRepository = cameraKit.lensRepository();
    const lens = await lensRepository.loadLens(lensGroupId);

    await session.applyLens(lens);

    session.play();
}

document.getElementById("start-button").addEventListener("click", () => {
    startAR();
});
