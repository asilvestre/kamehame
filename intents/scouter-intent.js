class ScouterIntent {
  constructor(app) {
    this.name = 'scouterIntent';
    this.slots = {};
    this.utterances = require('./scouter-intent.json');
  }

  execute(req, res) {
    res.say('You are too weak I don&#39;t detect any energy');
    res.shouldEndSession(true);
  }
}

module.exports = ScouterIntent;
