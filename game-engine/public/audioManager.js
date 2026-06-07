// NEXUS Audio Manager - Simplified Version
// Handles audio playback without heavy initialization

class AudioManager {
  constructor() {
    try {
      // Get audio elements
      this.bgmAudio = document.getElementById('bgmAudio');
      this.ambienceAudio = document.getElementById('ambienceAudio');
      this.sfxClickAudio = document.getElementById('sfxClick');
      this.sfxTransitionAudio = document.getElementById('sfxTransition');
      this.sfxFourthLineAudio = document.getElementById('sfxFourthLine');

      // Get controls
      this.volumeSlider = document.getElementById('volumeSlider');
      this.toggleMusicBtn = document.getElementById('toggleMusicBtn');

      // State
      this.currentBGM = null;
      this.bgmVolume = 0.3;
      this.isMusicPlaying = true;

      this.init();
    } catch (e) {
      console.warn('⚠️ AudioManager init error:', e.message);
    }
  }

  init() {
    // Volume control
    if (this.volumeSlider) {
      this.volumeSlider.addEventListener('change', (e) => {
        this.bgmVolume = e.target.value / 100;
        if (this.bgmAudio) this.bgmAudio.volume = this.bgmVolume;
        localStorage.setItem('nexus_volume', e.target.value);
      });
    }

    // Music toggle
    if (this.toggleMusicBtn) {
      this.toggleMusicBtn.addEventListener('click', () => {
        this.toggleMusic();
      });
    }

    // Load saved volume
    const savedVolume = localStorage.getItem('nexus_volume') || 30;
    if (this.volumeSlider) this.volumeSlider.value = savedVolume;
    this.bgmVolume = savedVolume / 100;
    if (this.bgmAudio) this.bgmAudio.volume = this.bgmVolume;
  }

  // Play click sound
  playClick() {
    try {
      if (this.sfxClickAudio) {
        this.sfxClickAudio.volume = 0.5;
        this.sfxClickAudio.currentTime = 0;
        this.sfxClickAudio.play().catch(() => {});
      }
    } catch (e) {}
  }

  // Play transition sound
  playTransition() {
    try {
      if (this.sfxTransitionAudio) {
        this.sfxTransitionAudio.volume = 0.7;
        this.sfxTransitionAudio.currentTime = 0;
        this.sfxTransitionAudio.play().catch(() => {});
      }
    } catch (e) {}
  }

  // Change scene audio (simplified - just plays BGM)
  changeSceneAudio(sceneId) {
    try {
      // For now, just keep the same BGM
      // Full implementation would map scenes to different music
      if (this.bgmAudio && !this.bgmAudio.src) {
        this.bgmAudio.src = 'audio/music/nexus-ambient.mp3';
        this.bgmAudio.play().catch(() => {});
      }
    } catch (e) {}
  }

  // Toggle music on/off
  toggleMusic() {
    try {
      this.isMusicPlaying = !this.isMusicPlaying;

      if (this.isMusicPlaying) {
        if (this.bgmAudio) this.bgmAudio.play().catch(() => {});
        if (this.toggleMusicBtn) this.toggleMusicBtn.textContent = '🔊';
      } else {
        if (this.bgmAudio) this.bgmAudio.pause();
        if (this.toggleMusicBtn) this.toggleMusicBtn.textContent = '🔇';
      }

      localStorage.setItem('nexus_music_playing', this.isMusicPlaying);
    } catch (e) {}
  }

  // Sound effect methods
  playFourthLine() {
    try {
      const audio = new Audio('audio/sfx/fourth-line.mp3');
      audio.volume = 0.8;
      audio.play().catch(() => {});
    } catch (e) {}
  }

  playSuccess() {
    try {
      // Use transition as success sound (uplifting)
      const audio = new Audio('audio/sfx/transition.mp3');
      audio.volume = 0.7;
      audio.play().catch(() => {});
    } catch (e) {}
  }

  playError() {
    try {
      // Use fourth-line reversed/as warning (mystical warning)
      const audio = new Audio('audio/sfx/fourth-line.mp3');
      audio.volume = 0.5;
      audio.playbackRate = 0.8; // Slightly slower = more ominous
      audio.play().catch(() => {});
    } catch (e) {}
  }

  playEndingSting() {
    try {
      // Use transition as ending sting
      const audio = new Audio('audio/sfx/transition.mp3');
      audio.volume = 0.9;
      audio.playbackRate = 1.2; // Slightly faster = more dramatic
      audio.play().catch(() => {});
    } catch (e) {}
  }

  // ============= PHASE B: NEW AUDIO METHODS =============

  // Play positive feedback (good choice)
  playPositive() {
    try {
      const audio = new Audio('audio/sfx/success.mp3');
      audio.volume = 0.6;
      audio.play().catch(() => {});
    } catch (e) {}
  }

  // Play negative feedback (bad choice)
  playNegative() {
    try {
      const audio = new Audio('audio/sfx/error.mp3');
      audio.volume = 0.6;
      audio.playbackRate = 0.8;
      audio.play().catch(() => {});
    } catch (e) {}
  }

  // Play relationship change sound
  playRelationshipChange(amount) {
    try {
      if (amount > 0) {
        this.playPositive(); // Use success for positive
      } else if (amount < 0) {
        this.playNegative(); // Use error for negative
      }
    } catch (e) {}
  }

  // Play achievement unlock
  playAchievementUnlock() {
    try {
      const audio = new Audio('audio/sfx/ending-sting.mp3');
      audio.volume = 0.9;
      audio.play().catch(() => {});
    } catch (e) {}
  }

  // Play consequence reveal
  playConsequenceReveal() {
    try {
      const audio = new Audio('audio/sfx/fourth-line.mp3');
      audio.volume = 0.7;
      audio.playbackRate = 1.1;
      audio.play().catch(() => {});
    } catch (e) {}
  }

  // Play button hover (subtle)
  playButtonHover() {
    try {
      const audio = new Audio('audio/sfx/click.mp3');
      audio.volume = 0.2;
      audio.playbackRate = 1.5; // Higher pitch for subtle hover
      audio.play().catch(() => {});
    } catch (e) {}
  }

  fadeOutAll() {}
  fadeInAll() {}
  setMasterVolume() {}
}

// Initialize when DOM is ready
let audioManager = null;

console.log('🔊 AudioManager script loaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('🔊 DOMContentLoaded - Creating AudioManager');
  try {
    audioManager = new AudioManager();
    window.audioManager = audioManager;
    console.log('✅ Audio manager ready');
  } catch (e) {
    console.error('❌ Audio manager failed:', e);
  }
});
