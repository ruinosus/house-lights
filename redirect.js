// house-lights moved to DNA: each old address goes to its new one (the skills' new names), the rest to the front page.
(function () {
  var map = { 'chalk-talk': 'visual-explainer', 'back-of-napkin': 'visual-pitch', 'gates-and-handoffs': 'way-of-working',
    'service-blueprint': 'service-blueprint', 'dress-rehearsal': 'incident-drill', 'cast-list': 'agent-review',
    'box-office': 'process-simulation', 'opening-night': 'solution' };
  var rest = location.pathname.replace(/^\/house-lights\/?/, '').split('/');
  var skill = map[rest[0]];
  location.replace('https://ruinosus.github.io/dna/' + (skill ? skill + '/' : '') + location.hash);
})();
