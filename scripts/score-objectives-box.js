const scoreObjectivesBoxContainer = document.getElementById('scoreObjectivesBoxContainer');
const addScoreObjectivesBoxButton = document.getElementById('addScoreObjectivesBoxButton');

function addScoreObjectivesBox() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('score-objectives-box');
    
    newDiv.innerHTML = `
    <div>
      <div>
        <div class="score-objectives-box-input-inner-category-input"><input id="scoreObjectivesBoxInput" type="text" placeholder="Enter objective name"></div>
        <button class="score-objectives-box-input-inner-category-info segoe-fluent-icons" onclick="toggleFlyout('')">&#xE897;</button>
      </div>
      <div>
        <div class="score-objectives-box-input-inner-category-input"><input id="scoreObjectivesBoxInput" type="number" placeholder="Enter min score"></div>
        <button class="score-objectives-box-input-inner-category-info segoe-fluent-icons" onclick="toggleFlyout('')">&#xE897;</button>
      </div>
      <div>
        <div class="score-objectives-box-input-inner-category-input"><input id="scoreObjectivesBoxInput" type="number" placeholder="Enter max score"></div>
        <button class="score-objectives-box-input-inner-category-info segoe-fluent-icons" onclick="toggleFlyout('')">&#xE897;</button>
      </div>
    </div>
    <div>
      <button id="removeScoreObjectivesBoxButton" class="score-objectives-box-input-inner-category-other segoe-fluent-icons">&#xE711;</button>
      <button id="removeScoreObjectivesBoxButton" class="score-objectives-box-input-inner-category-other segoe-fluent-icons" onclick="generateCommand()">&#xE72C;</button>
    </div>
    `;

    scoreObjectivesBoxContainer.appendChild(newDiv);

    newDiv.querySelector('#removeScoreObjectivesBoxButton').addEventListener('click', function() {
        newDiv.remove();
        generateCommand();
    });
}

addScoreObjectivesBoxButton.addEventListener('click', addScoreObjectivesBox);