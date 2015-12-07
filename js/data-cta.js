var _DATA_CTA = {
  // --> Config générale
  iraiser_cid : 104,
  iraiser_url : 'donner.carefrance.org',

  // - Ajout des CTA avec action éclaté pour WoopraTrack
  woopra_interaction : "cta_enfantsrefugies-dyngrid15",

  segments : {
    'PROSPECT':   {'arrondiSup':0, 'type': 'addition', 'values':[0,2,5]} ,
    'DON_LOW':    {'arrondiSup':0, 'type': 'addition', 'values':[0,5,10]} ,
    'DON_MIDDLE': {'arrondiSup':1, 'type': 'percent',  'values':[0,50,100]} ,
    'DON_HIGH':   {'arrondiSup':1, 'type': 'percent', 'values':[0,50,100]} ,
    'GD':         {'arrondiSup':0, 'type': 'libre'}
  }
};
