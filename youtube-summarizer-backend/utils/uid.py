import uuid

def generate_uid() -> str:
    """Generate a unique identifier for naming audio files."""
    return uuid.uuid4().hex  # e.g., "9a32cb1a34ad4b1e9b7c1d0e1e2f3a8f"
