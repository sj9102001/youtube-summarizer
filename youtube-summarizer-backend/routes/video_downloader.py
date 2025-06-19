from fastapi import APIRouter, Request, Response
from yt_dlp import YoutubeDL
from utils import uid
from utils.uid import generate_uid

router = APIRouter()

youtube_downloader_config = {
    'format': 'bestaudio/best',
    'postprocessors': [
        {
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'wav',  # you can use 'wav' if Whisper prefers that
            'preferredquality': '192',
        }
    ],
    'quiet': True,
}

@router.post("")
async def download_video(request: Request):
    request_body = await request.json()

    url = request_body["url"]
    uid = generate_uid()

    output_path = f"audio/{uid}.wav"
    youtube_downloader_config["outtmpl"] = output_path

    YoutubeDL(youtube_downloader_config).download([url])

    return {
        "status": "Downloading",
        "output_path": output_path
    }