import time
import platform
import subprocess

# tts = gTTS(text="Text that you want to convert to speech", lang="en-US")
# tts.save("tempfile.mp3")

def talk(sentence):
    subprocess.call(['./say', sentence])

talk('saying something')
