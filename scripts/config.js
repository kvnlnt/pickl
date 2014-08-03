Pickl.prototype.Config = (function(){

	var config = {

		title:'Options',
		fields:{
			order_test:{
				name:'order',
				value:'two',
				enabled:true,
				options:{
					'two':{ name:'two', value:'two' },
					'1':{ name:'1', value:'1' }

				}
			},
			orientation:{
				name:'orientation',
				value:'righty',
				enabled:true,
				callback:null,
				options:{
					righty:{
						name:'righty',
						value:'RIGHTY'
					},
					lefty:{
						name:'lefty',
						value:'LEFTY'
					}
				}
			},
			root:{
				name:'root',
				value:'c_n',
				enabled:true,
				options:{
					c_n:{ name:'C',  value : 'C' },
					c_s:{ name:'C#', value : 'C#' },
					d_f:{ name:'Db', value : 'Db' },
					d_n:{ name:'D',  value : 'D' },
					d_s:{ name:'D#', value : 'D#' },
					e_f:{ name:'Eb', value : 'Eb' },
					e_n:{ name:'E',  value :'E' },
					f_n:{ name:'F',  value :'F' },
					f_s:{ name:'F#', value :'F#' },
					g_b:{ name:'Gb', value :'Gb' },
					g_n:{ name:'G',  value :'G' },
					g_s:{ name:'G#', value :'G#' },
					a_f:{ name:'Ab', value :'Ab' },
					a_n:{ name:'A',  value :'A' },
					a_s:{ name:'A#', value :'A#' },
					b_b:{ name:'Bb', value :'Bb' },
					b_n:{ name:'B',  value :'B' }
				}
			},
			instrument:{
				name:'instrument',
				value:'guitar',
				enabled:true,
				callback:null,
				options:{
					guitar:{
						name:'guitar',
						value:'GUITAR',
						enable:'tuning_guitar',
						disable:'tuning_banjo'
					},
					banjo:{
						name:'banjo',
						value:'BANJO',
						disable:'tuning_guitar',
						enable:'tuning_banjo'
					}
				}
			},
			tuning_guitar:{
				name:'tuning',
				value:'standard',
				enabled:true,
				options:{
					standard:{
						name:'standard',
						value:'EADGBE'
					},
					drop_d:{
						name:'drop d',
						value:'DADGBE'
					}
				}
			},
			tuning_banjo:{
				name:'tuning',
				value:'standard',
				enabled:false,
				options:{
					standard:{
						name:'standard',
						value:'EADG'
					},
					drop_d:{
						name:'drop d',
						value:'DADG'
					}
				}
			}
		}

	};

	return config;

}());