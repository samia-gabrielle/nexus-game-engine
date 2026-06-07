// NEXUS v0.6 - Expansion System Client Integration
// Handles relationships, consequences, NPCs, locations on the frontend
// SIMPLIFIED: No visual relationship display - focus on game logic only

const ExpansionClient = {
  // ============= GAME OVER CHECK =============
  async checkGameOver() {
    if (gameState.isDead || gameState.gameOverReason) {
      this.showGameOverScreen();
      return true;
    }
    return false;
  },

  showGameOverScreen() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="game-over-modal">
        <div class="game-over-content">
          <h2>⚠️ GAME OVER</h2>
          <p>${gameState.gameOverReason || 'Your journey has ended.'}</p>
          <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button class="btn btn-large" onclick="location.reload()">Recomeçar</button>
            <button class="btn btn-large" onclick="loadGame('auto')">Carregar Último Save</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  // ============= UNLOCK NOTIFICATIONS =============
  displayUnlock(type, name, description) {
    const notif = document.createElement('div');
    notif.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      z-index: 1001;
      animation: slideIn 0.4s ease;
      max-width: 300px;
    `;

    let icon = '';
    if (type === 'location') icon = '🗺️';
    else if (type === 'npc') icon = '👤';
    else if (type === 'achievement') icon = '🏆';

    notif.innerHTML = `
      <strong>${icon} ${type.toUpperCase()} DESBLOQUEADO!</strong>
      <p style="margin: 5px 0 0 0; font-size: 14px;">${name}</p>
      <p style="margin: 3px 0 0 0; font-size: 12px; opacity: 0.9;">${description}</p>
    `;

    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 4000);
  },

  // ============= UPDATE AFTER CHOICE =============
  async updateAfterChoice(newState, consequence) {
    // Update game state
    gameState = newState;

    // Check for game over
    if (await this.checkGameOver()) {
      return false;
    }

    return true;
  }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Expansion system ready
});
