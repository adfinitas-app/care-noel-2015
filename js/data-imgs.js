var _DATA_IMGS = {
  // --> Config générale
  iraiser_cid : 53,
  iraiser_url : 'don.spa.asso.fr',

  // - Ajout des CTA avec action éclaté pour WoopraTrack
  woopra_interaction     :   ['don-IMG', '_ete2015'],

  // - Ajout des paramètres fiscaux
  fiscal_phrase : 'Soit <span class="deduction">{{XX}}€</span> après déduction fiscale',
  fiscal_rules  : {percentplafond: 75, percentreste: 66, plafond: 529, ISF: 0},

  // -->

  html_build     :   {
    'OPTIN':   [
    {   amount: 56,
      image:  'http://sosabandon.spa.asso.fr/img/chien.png',
      text:   'Pour nourrir 2 chiens pendant 2 mois.' },
    {   amount: 75,
      image:  'http://sosabandon.spa.asso.fr/img/chat.png',
      text:   'Pour stériliser et identifier un chat.' },
    {   amount: 256,
      image:  'http://sosabandon.spa.asso.fr/img/chienchat.png',
      text:   'Pour nourrir et soigner un chien et un chat pendant 4 mois.', },
    ],
    'ADHERENT':  [
    {   amount: 56,
      image:  'http://sosabandon.spa.asso.fr/img/chien.png',
      text:   'Pour nourrir 2 chiens pendant 2 mois', },
    {   amount: 112,
      image:  'http://sosabandon.spa.asso.fr/img/chat.png',
      text:   'Soigner un chat pendant 5 mois', },
    {   amount: 256,
      image:  'http://sosabandon.spa.asso.fr/img/chienchat.png',
      text:   'Pour nourrir et soigner un chien et un chat pendant 4 mois', },
    ],
    'DONATEUR':  [
    {   amount: 56,
      image:  'http://sosabandon.spa.asso.fr/img/chien.png',
      text:   'Pour nourrir 2 chiens pendant 2 mois', },
    {   amount: 112,
      image:  'http://sosabandon.spa.asso.fr/img/chat.png',
      text:   'Soigner un chat pendant 5 mois', },
    {   amount: 256,
      image:  'http://sosabandon.spa.asso.fr/img/chienchat.png',
      text:   'Pour nourrir et soigner un chien et un chat pendant 4 mois', },
    ],
    'MIDDLE':  [
    {   amount: 306,
      image:  'http://sosabandon.spa.asso.fr/img/chien.png',
      text:   'Nourrir et soigner 3 chiens pendant 3 mois', },
    {   amount: 408,
      image:  'http://sosabandon.spa.asso.fr/img/chat.png',
      text:   'Nourrir et soigner 1 chat pendant 1 an', },
    {   amount: 510,
      image:  'http://sosabandon.spa.asso.fr/img/chienchat.png',
      text:   'Castrer / Stériliser 3 chiens et 3 chats', },
    ],
    'GD':  [
    {   amount: 610,
      image:  'http://image2.milehighcomics.com/istore/images/large/94640117592.1.gif',
      text:   'Nourrir et soigner 3 chiens pendant 3 mois', },
    {   amount: 980,
      image:  'http://image2.milehighcomics.com/istore/images/large/94640117592.2.gif',
      text:   'Nourrir et soigner 1 chat pendant 1 an', },
    {   amount: 1200,
      image:  'http://image2.milehighcomics.com/istore/images/large/94640117592.3.gif',
      text:   'Castrer / Stériliser 3 chiens et 3 chats', },
    ],
  },

  segments : {
    'OPTIN':    {'arrondiSup':0, 'type': 'addition', 'values':[0,2,5], 'defisc':'IR', iraiser_params: {'cid':55, 'reserved_origine':'toto', 'code_campagne':'TK534'}} ,
    'ADHERENT': {'arrondiSup':5, 'type': 'addition', 'values':[0,5,10], 'defisc':'IR', iraiser_params: {'cid':55, 'reserved_origine':'toto', 'code_campagne':'TK534'}} ,
    'DONATEUR': {'arrondiSup':5, 'type': 'percent',  'values':[0,25,50], 'defisc':'IR', iraiser_params: {'cid':55, 'reserved_origine':'toto', 'code_campagne':'TK534'}} ,
    'MIDDLE':   {'arrondiSup':5, 'type': 'addition', 'values':[0,25,100], 'defisc':'IR', iraiser_params: {'cid':55, 'reserved_origine':'toto', 'code_campagne':'TK534'}} ,
    'GD':       {'arrondiSup':0, 'type': 'libre-preremplit', 'defisc':'ISF', iraiser_params: {'cid':55, 'reserved_origine':'toto', 'code_campagne':'TK534'}}
  }
}
