export const menuContent =
    `<div class="game-menu">
            <span>Сложность</span>
            <button class="sketch-button easy">легко</button>
            <button class="sketch-button norm">нормально</button>
            <button class="sketch-button hard">сложно</button>
</div>`

export const tetrisContent = `<h1 class="title">TETRIS</h1>
        <div class="game-content_inner">
            <div class="canvas-bg">
                <canvas width="320" height="640" id="game"></canvas>
            </div>
            <div class="game-content_info">
                <div class="game-content_next">
                    <span class="next_title">NEXT</span>
                    <div class="next_inner">
                        <div class="tetromino">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="game-content_score">
                    <span class="score-title">NEXT</span>
                    <span class="score-total">0</span>
                </div>

                <div class="game-btn">
                    <button class="sketch-button start">START</button>
                    <button class="sketch-button pause">PAUSE</button>
                    <button class="sketch-button restart">RESTART</button>
                </div>

                <div class="game-controllers">
                    <button class="sketch-button top">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffff"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L4 12H9V20H15V12H20L12 4Z" fill="currentColor" />
                            </svg>
                        </span>
                    </button>
                    <button class="sketch-button bottom">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffff"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L4 12H9V20H15V12H20L12 4Z" fill="currentColor" />
                            </svg>
                        </span>
                    </button>
                    <button class="sketch-button left">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffff"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L4 12H9V20H15V12H20L12 4Z" fill="currentColor" />
                            </svg>
                        </span>
                    </button>
                    <button class="sketch-button right">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffff"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L4 12H9V20H15V12H20L12 4Z" fill="currentColor" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>`