# Import necessary libraries
import numpy as np
import librosa
import soundfile

# Function to extract MFCC features from an audio file
def extractFeature(fileName, mfcc=True):
    # Open the sound file using the soundfile library
    with soundfile.SoundFile(fileName) as soundFile:
        # Read the sound file data into an array (X) with dtype float32
        X = soundFile.read(dtype="float32")
        # Get the sample rate of the sound file
        sampleRate = soundFile.samplerate
        
        # Initialize the result array
        result = np.array([])
        
        # If MFCC (Mel-Frequency Cepstral Coefficients) feature is to be extracted
        if mfcc:
            # Compute the MFCC features and take the mean along the time axis
            mfccs = np.mean(librosa.feature.mfcc(y=X, sr=sampleRate, n_mfcc=40).T, axis=0)
            # Append the MFCC features to the result array
            result = np.hstack((result, mfccs))
    
    # Return the final feature array
    return result

# Example usage:
# fileName = 'path_to_audio_file.wav'
# features = extractFeature(fileName)
# print(features)
