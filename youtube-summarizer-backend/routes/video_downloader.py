from fastapi import APIRouter, Request, Response

router = APIRouter()

@router.post("")
async def download_video(request: Request):
    request_body = await request.json()

    url = request_body["url"]

    print("URL: ", url)

    return {
        "status": "Uploaded"
    }