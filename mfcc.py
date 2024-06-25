# Import necessary libraries
import numpy as np
import librosa
import soundfile

# Function to extract features from an audio file
def extract_feature(file_name, mfcc, chroma, mel):
    # Open the sound file using the soundfile library
    with soundfile.SoundFile(file_name) as sound_file:
        # Read the sound file data into an array (X) with dtype float32
        X = sound_file.read(dtype="float32")
        # Get the sample rate of the sound file
        sample_rate = sound_file.samplerate
        
        # Initialize the result array
        result = np.array([])
        
        # If chroma feature is to be extracted
        if chroma:
            # Compute the Short-Time Fourier Transform (STFT) of the audio signal
            stft = np.abs(librosa.stft(X))
        
        # If MFCC (Mel-Frequency Cepstral Coefficients) feature is to be extracted
        if mfcc:
            # Compute the MFCC features and take the mean along the time axis
            mfccs = np.mean(librosa.feature.mfcc(y=X, sr=sample_rate, n_mfcc=40).T, axis=0)
            # Append the MFCC features to the result array
            result = np.hstack((result, mfccs))
        
        # If chroma feature is to be extracted
        if chroma:
            # Compute the chroma feature from the STFT and take the mean along the time axis
            chroma = np.mean(librosa.feature.chroma_stft(S=stft, sr=sample_rate).T, axis=0)
            # Append the chroma features to the result array
            result = np.hstack((result, chroma))
        
        # The mel feature extraction part is commented out
        '''
        if mel:
            # Compute the Mel spectrogram and take the mean along the time axis
            mel = np.mean(librosa.feature.melspectrogram(X, sr=sample_rate).T, axis=0)
            # Append the Mel spectrogram features to the result array
            result = np.hstack((result, mel))
        '''
    
    # Return the final feature array
    return result
