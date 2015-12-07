var _DATA_IMGS = {
  // --> Config générale
  iraiser_cid : 104,
  iraiser_url : 'donner.carefrance.org',

  // - Ajout des CTA avec action éclaté pour WoopraTrack
  woopra_interaction     :   "equi_enfantsrefugies-dyngrid15",

  // - Ajout des paramètres fiscaux
  fiscal_phrase : '<span class="deduction">{{XX}}€</span> après déduction fiscale',
  fiscal_rules  : {percentplafond: 75, percentreste: 66, plafond: 529, ISF: 0},

  // -->

  html_build     :   {
    'PROSPECT':   [
    {   amount: 60,
      image:  '',
      text:   'Équivaut à des couvertures épaisses pour protéger du froid 2 familles de réfugiés' },
    {   amount: 90,
      image:  '',
      text:   'Équivaut à distribuer des manuels scolaires à une classe d’élèves pour ne pas interrompre leur scolarité' },
    {   amount: 180,
      image:  '',
      text:   'Équivaut à 10 kits d’hygiène comprenant du savon, dentifrice, brosse à dent, lessive et pastilles de purification d’eau', },
    ],
    'DON_LOW':  [
    {   amount: 60,
      image:  '',
      text:   'Équivaut à des couvertures épaisses pour protéger du froid 2 familles de réfugiés' },
    {   amount: 90,
      image:  '',
      text:   'Équivaut à distribuer des manuels scolaires à une classe d’élèves pour ne pas interrompre leur scolarité' },
    {   amount: 180,
      image:  '',
      text:   'Équivaut à 10 kits d’hygiène comprenant du savon, dentifrice, brosse à dent, lessive et pastilles de purification d’eau', },
    ],
    'DON_MIDDLE':  [
    {   amount: 90,
      image:  '',
      text:   'Équivaut à des couvertures épaisses pour protéger du froid 2 familles de réfugiés' },
    {   amount: 125,
      image:  '',
      text:   'Équivaut à distribuer des manuels scolaires à une classe d’élèves pour ne pas interrompre leur scolarité' },
    {   amount: 255,
      image:  '',
      text:   'Équivaut à 10 kits d’hygiène comprenant du savon, dentifrice, brosse à dent, lessive et pastilles de purification d’eau', },
    ],
    'DON_HIGH':  [
    {   amount: 250,
      image:  '',
      text:   'Équivaut à des couvertures épaisses pour protéger du froid 2 familles de réfugiés' },
    {   amount: 350,
      image:  '',
      text:   'Équivaut à distribuer des manuels scolaires à une classe d’élèves pour ne pas interrompre leur scolarité' },
    {   amount: 500,
      image:  '',
      text:   'Équivaut à 10 kits d’hygiène comprenant du savon, dentifrice, brosse à dent, lessive et pastilles de purification d’eau', },
    ],
    'GD':  [
    {   amount: 250,
      image:  '',
      text:   'Équivaut à des couvertures épaisses pour protéger du froid 2 familles de réfugiés' },
    {   amount: 350,
      image:  '',
      text:   'Équivaut à distribuer des manuels scolaires à une classe d’élèves pour ne pas interrompre leur scolarité' },
    {   amount: 500,
      image:  '',
      text:   'Équivaut à 10 kits d’hygiène comprenant du savon, dentifrice, brosse à dent, lessive et pastilles de purification d’eau', },
    ],
  },

  segments : {
    'PROSPECT':   {'arrondiSup':0, 'type': 'addition', 'values':[0,2,5]} ,
    'DON_LOW':    {'arrondiSup':0, 'type': 'addition', 'values':[0,5,10]} ,
    'DON_MIDDLE': {'arrondiSup':1, 'type': 'percent',  'values':[0,50,100]} ,
    'DON_HIGH':   {'arrondiSup':1, 'type': 'percent', 'values':[0,50,100]} ,
    'GD':         {'arrondiSup':0, 'type': 'libre'}
  }
}
