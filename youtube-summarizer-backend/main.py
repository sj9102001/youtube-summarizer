from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient

from routes import video_downloader

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Or ["*"] for all origins (not safe for prod)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(video_downloader.router, prefix="/video", tags=["video"])

client = MongoClient("mongodb://admin:password@mongodb:27017/")
db = client["youtube_summarizer"]

@app.get("/")
async def main():
    return "Index"
