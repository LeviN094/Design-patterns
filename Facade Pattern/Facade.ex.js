// Subsystems
class TV {
  turnOn() { console.log("TV is ON"); }
  turnOff() { console.log("TV is OFF"); }
}

class SoundSystem {
  setVolume(level) { console.log(`Sound volume set to ${level}`); }
}

class Lights {
  dim() { console.log("Lights dimmed"); }
  on() { console.log("Lights ON"); }
}

// Facade
class HomeTheaterFacade {
  constructor() {
    this.tv = new TV();
    this.sound = new SoundSystem();
    this.lights = new Lights();
  }

  startMovieNight() {
    console.log("🎬 Starting movie night...");
    this.lights.dim();
    this.tv.turnOn();
    this.sound.setVolume(5);
  }

  endMovieNight() {
    console.log("🛏️ Ending movie night...");
    this.tv.turnOff();
    this.lights.on();
  }
}

// Client
const home = new HomeTheaterFacade();
home.startMovieNight();
home.endMovieNight();
