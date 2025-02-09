setup() {function
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retrovert Pomodoro</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color:rgba(244, 249, 248, 0.6);
      }
      h1 {
        color: #333;
      }
      #taskInput {
        padding: 10px;
        font-size: 16px;
        margin-bottom: 10px;
        width: 250px;
      }
      .container {
    max-width: 4000px;
    margin: auto;
    background: rgb(181, 196, 127);
    padding: 20px;
    border-radius: 70px;
    box-shadow: 0px 0px 10px
rgba(0, 0, 0, 0.2);
    }
      #startButton {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        background-color:rgb(165, 29, 79);
        color: white;
        border: none;
        border-radius: 5px;
        margin-bottom: 20px;
      }
      #startButton:hover {
        background-color:rgb(111, 15, 190);
      }
      #timer {
        font-size: 40px;
        margin-bottom: 20px;
        font-weight: bold;
      }
      .status {
        font-size: 20px;
        color: #888;
      }
    </style>
  </head>
  <body>
  
    <h1>Reverse Pomodoro Timer</h1>
    
    <!-- Task input and button -->
    <input type="text" id="taskInput" placeholder="Enter your task here">
    <button id="startButton" onclick="startPomodoro()">Start Task</button>
  
    <!-- Display task and timer -->
    <div id="taskDisplay" style="display:none;">
      <p><strong>Task:</strong> <span id="currentTask"></span></p>
      <div id="timer">25:00</div>
      <p class="status" id="status">Working...</p>
    </div>
  
    <script>
      let workTime = 25 * 60; // 25 minutes in seconds
      let breakTime = 5 * 60; // 5 minutes in seconds
      let currentTime = workTime;
      let isBreak = false;
      let timerInterval;
      
      function startPomodoro() {
        let taskInput = document.getElementById('taskInput');
        let task = taskInput.value.trim();
        
        if (task) {
          // Display task name and start the timer
          document.getElementById('currentTask').textContent = task;
          document.getElementById('taskDisplay').style.display = 'block';
          taskInput.style.display = 'none';
          document.getElementById('startButton').style.display = 'none';
  
          // Start the countdown timer
          timerInterval = setInterval(updateTimer, 1000);
        } else {
          alert('Please enter a task!');
        }
      }
  
      function updateTimer() {
        // Calculate minutes and seconds
        let minutes = Math.floor(currentTime / 60);
        let seconds = currentTime % 60;
  
        // Display the time (MM:SS)
        document.getElementById('timer').textContent = padZero(minutes) + ':' + padZero(seconds);
  
        // Decrease the time each second
        currentTime--;
  
        // Check if the timer has ended
        if (currentTime === 0) {
          if (isBreak) {
            document.getElementById('status').textContent = "Break time is over! Time to work!";
            isBreak = false;
            currentTime = workTime; // Switch to work time
          } else {
            document.getElementById('status').textContent = "Work session is over! Take a break!";
            isBreak = true;
            currentTime = breakTime; // Switch to break time
          }
        }
      }
  
      function padZero(num) {
        return num < 10 ? '0' + num : num;
      }
    </script>
  
  </body>
  </html>
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse Pomodoro Timer</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color:rgb(117, 117, 187);
      }
      h1 {
        color: #333;
      }
      #taskInput {
        padding: 50px;
        font-size: 16px;
        margin-bottom: 10px;
        width: 250px;
      }
      #startButton {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        background-color:rgb(216, 139, 67);
        color: white;
        border: none;
        border-radius: 5px;
        margin-bottom: 20px;
      }
      #startButton:hover {
        background-color:rgb(0, 0, 0);
      }
      #timer {
        font-size: 90px;
        margin-bottom: 20px;
        font-weight: bold;
      }
      .status {
        font-size: 20px;
        color: #888;
      }
    </style>
  </head>
  <body>
  
    <h1>Reverse Pomodoro Timer</h1>
    
    <!-- Task input and button -->
    <input type="text" id="taskInput" placeholder="your break">
    <button id="startButton" onclick="startPomodoro()">Start Task</button>
  
    <!-- Display task and timer -->
    <div id="taskDisplay" style="display:none;">
      <p><strong>Task:</strong> <span id="currentTask"></span></p>
      <div id="timer">25:00</div>
      <p class="status" id="status">Working...</p>
    </div>
  
    <script>
      let workTime = 25 * 60; // 25 minutes in seconds
      let breakTime = 5 * 60; // 5 minutes in seconds
      let currentTime = workTime;
      let isBreak = false;
      let timerInterval;
      
      function startPomodoro() {
        let taskInput = document.getElementById('taskInput');
        let task = taskInput.value.trim();
        
        if (task) {
          // Display task name and start the timer
          document.getElementById('currentTask').textContent = task;
          document.getElementById('taskDisplay').style.display = 'block';
          taskInput.style.display = 'none';
          document.getElementById('startButton').style.display = 'none';
  
          // Start the countdown timer
          timerInterval = setInterval(updateTimer, 1000);
        } else {
          alert('Please enter a task!');
        }
      }
  
      function updateTimer() {
        // Calculate minutes and seconds
        let minutes = Math.floor(currentTime / 60);
        let seconds = currentTime % 60;
  
        // Display the time (MM:SS)
        document.getElementById('timer').textContent = padZero(minutes) + ':' + padZero(seconds);
  
        // Decrease the time each second
        currentTime--;
  
        // Check if the timer has ended
        if (currentTime === 0) {
          if (isBreak) {
            document.getElementById('status').textContent = "Break time is over! Time to work!";
            isBreak = false;
            currentTime = workTime; // Switch to work time
          } else {
            document.getElementById('status').textContent = "Work session is over! Take a break!";
            isBreak = true;
            currentTime = breakTime; // Switch to break time
          }
        }
      }
  
      function padZero(num) {
        return num < 10 ? '0' + num : num;
      }
    </script>
  
  </body>
  </html>
  