document.querySelectorAll('input, select').forEach(element => {
  element.addEventListener('input', function () {
    generateCommand();
  });
});

const targetMapping = {
  "theNearestPlayer": "@p",
  "aRandomPlayer": "@r",
  "allPlayers": "@a",
  "allEntities": "@e",
  "theEntityExecutingTheCommand": "@s",
  "playerName": ""
};

function generateCommand() {
  let commandName = '/give '

  let targetNoMapping = document.getElementById('dropdownTarget').value;
  let target = targetMapping[targetNoMapping];
  if (targetNoMapping === "playerName") {
    let playerName = document.getElementById('inputTarget').value;
    if (playerName) {
      target = playerName;
    } else {
      target = 'Steve';
      console.log('No player name was entered. Steve is default.')
    }
  }

  let targetSelectorParts = [];

  let limit = document.getElementById('inputLimit').value;
  if (limit) targetSelectorParts.push(`limit=${limit}`);

  let sort = document.getElementById('dropdownSort').value;
  if (sort) {
    if (sort !== 'unset') {
      targetSelectorParts.push(`sort=${sort}`);
    }
  }

  let x = document.getElementById('inputX').value;
  if (x) targetSelectorParts.push(`x=${x}`);

  let y = document.getElementById('inputY').value;
  if (y) targetSelectorParts.push(`y=${y}`);

  let z = document.getElementById('inputZ').value;
  if (z) targetSelectorParts.push(`z=${z}`);

  let selectionArea = document.getElementById('dropdownSelectionArea').value;
  let selectionAreaMinRadius = document.getElementById('inputSelectionArea').value;
  let selectionAreaMaxRadius = document.getElementById('inputSelectionAreaTwo').value;
  let selectionAreaPositiveXDirection = document.getElementById('inputSelectionAreaThree').value;
  let selectionAreaPositiveYDirection = document.getElementById('inputSelectionAreaFour').value;
  let selectionAreaPositiveZDirection = document.getElementById('inputSelectionAreaFive').value;
  if (selectionAreaMinRadius || selectionAreaMaxRadius || selectionAreaPositiveXDirection || selectionAreaPositiveYDirection || selectionAreaPositiveZDirection) {
    if (selectionArea === 'radius') {
      if (selectionAreaMinRadius === selectionAreaMaxRadius) {
        targetSelectorParts.push(`distance=${selectionAreaMinRadius}`);
      } else {
        targetSelectorParts.push(`distance=${selectionAreaMinRadius}..${selectionAreaMaxRadius}`);
      }
    } else {
      if (selectionAreaPositiveXDirection) targetSelectorParts.push(`dx=${selectionAreaPositiveXDirection}`);
      if (selectionAreaPositiveYDirection) targetSelectorParts.push(`dx=${selectionAreaPositiveYDirection}`);
      if (selectionAreaPositiveZDirection) targetSelectorParts.push(`dx=${selectionAreaPositiveZDirection}`);
    }
  }

  let minVertRotation = document.getElementById('inputMinVertRotation').value;
  let maxVertRotation = document.getElementById('inputMaxVertRotation').value;
  if (minVertRotation || maxVertRotation) {
    if (minVertRotation === maxVertRotation) {
      targetSelectorParts.push(`distance=${minVertRotation}`);
    } else {
      targetSelectorParts.push(`distance=${minVertRotation}..${maxVertRotation}`);
    }
  }

  let minHorizRotation = document.getElementById('inputMinHorizRotation').value;
  let maxHorizRotation = document.getElementById('inputMaxHorizRotation').value;
  if (minHorizRotation || maxHorizRotation) {
    if (minHorizRotation === maxHorizRotation) {
      targetSelectorParts.push(`distance=${minHorizRotation}`);
    } else {
      targetSelectorParts.push(`distance=${minHorizRotation}..${maxHorizRotation}`);
    }
  }

  let team = document.getElementById('dropdownTeam').value;
  let teamName = document.getElementById('inputTeam').value;
  if (team || teamName) {
    if (team === 'onlyThisTeam' && teamName) {
      targetSelectorParts.push(`team=${teamName}`);
    }
    if (team === 'notThisTeam') {
      targetSelectorParts.push(`team=!${teamName}`);
    }
    if (team === 'onAnyTeam') {
      targetSelectorParts.push(`team=`);
    }
    if (team === 'notAnyTeam') {
      targetSelectorParts.push(`team=!`);
    }
  }

  let name = document.getElementById('dropdownName').value;
  let nameName = document.getElementById('inputName').value;
  if (name || nameName) {
    if (name === 'thisName' && nameName) {
      targetSelectorParts.push(`name=${nameName}`);
    }
    if (name === 'notThisName') {
      targetSelectorParts.push(`name=!${nameName}`);
    }
  }

  let nbt = document.getElementById('inputNbt').value;
  if (nbt) targetSelectorParts.push(`nbt=${nbt}`);

  let gameMode = document.getElementById('dropdownGameMode').value;
  let gameModeInvert = document.getElementById('inputGameMode');
  if (gameMode) {
    if (gameMode !== 'anyGameMode') {
      if (gameModeInvert.checked) {
        targetSelectorParts.push(`gamemode=!${gameMode}`);
      } else {
        targetSelectorParts.push(`gamemode=${gameMode}`);
      }
    }
  }

  let minXpLevel = document.getElementById('inputMinXpLevel').value;
  let maxXpLevel = document.getElementById('inputMaxXpLevel').value;
  if (minXpLevel || maxXpLevel) {
    if (minXpLevel === maxXpLevel) {
      targetSelectorParts.push(`level=${minXpLevel}`);
    } else {
      targetSelectorParts.push(`level=${minXpLevel}..${maxXpLevel}`);
    }
  }

  let advancements = document.getElementById('inputAdvancements').value;
  if (advancements) targetSelectorParts.push(`advancements=${advancements}`);

  let tags = document.getElementById('inputTags').value;
  if (tags) targetSelectorParts.push(`${tags.split(',').map(value => `tag=${value}`).join(',')}`);

  let predicates = document.getElementById('inputPredicates').value;
  if (predicates) targetSelectorParts.push(`${predicates.split(',').map(value => `predicate=${value}`).join(',')}`);

  function scoreObjectivesToJson() {
    const scoreObjectivesBoxes = document.querySelectorAll('.score-objectives-box');
    const scoreObjectivesToJsonResult = {};

    scoreObjectivesBoxes.forEach((box, index) => {
      const inputs = box.querySelectorAll('input');
      const objectiveName = inputs[0].value;
      const minScore = inputs[1].value;
      const maxScore = inputs[2].value;

      if (objectiveName) {
        scoreObjectivesToJsonResult[objectiveName] = { "min-score": minScore, "max-score": maxScore };
      }
    });
    return scoreObjectivesToJsonResult;
  }

  let scoreObjectivesToMinecraftFormattingResult;
  function scoreObjectivesToMinecraftFormatting(json) {
    scoreObjectivesToMinecraftFormattingResult = [];
    for (const [key, value] of Object.entries(json)) {
      const minScore = value['min-score'];
      const maxScore = value['max-score'];
      let scoreRange;
      if (minScore === maxScore || !maxScore) {
        scoreRange = minScore;
      } else {
        scoreRange = `${minScore}..${maxScore}`;
      }
      scoreObjectivesToMinecraftFormattingResult.push(`${key.toString()}=${scoreRange}`);
    }
  }

  scoreObjectivesToMinecraftFormatting(scoreObjectivesToJson());
  let scoreObjectives = scoreObjectivesToMinecraftFormattingResult.join(',');
  if (scoreObjectives !== '') targetSelectorParts.push(`scores={${scoreObjectives}}`);

  let itemUnset = document.getElementById('dropdownItem').value;
  let item
  if (itemUnset !== '-1') {
    item = ' ' + itemUnset;
  } else {
    item = '';
  }

  let countUnset = document.getElementById('inputCount').value;
  let count
  if (countUnset !== '') {
    count = ' ' + countUnset;
  } else {
    count = ''
  }

  let output = commandName + target + (targetSelectorParts.length > 0 ? `[${targetSelectorParts.join(',')}]` : '') + item + count; // (parts.length > 0 ? `[${parts.join(',')}]` : '') +

  document.getElementById('outputTextarea').innerText = output;
}