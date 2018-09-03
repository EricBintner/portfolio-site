var JPMcolors 	=  ["#97b3c4", "#669966", "#d6cd41", "#6699cc", "#996699", "#cc9933", "#669999", "#336699", "#003366", "#006666", "#b45010", "#820049"];

var white 		=	"#FFFFFF";
var darkGray 	= 	"#464646";
var medGray		=	'#666666';
var lightGray	=	'#A0A0A0';

var typeface	= 	'Amplitude-Regular,Arial,Helvetica,sans-serif';
var typefaceBold= 	'Amplitude-Medium ,Arial,Helvetica,sans-serif';



var themeNight = {
	colors: JPMcolors,
	chart: {
        backgroundColor: darkGray,
		borderColor: darkGray,
		borderWidth: 1,
		className: 'nightTheme',
		/*plotBackgroundColor: 'rgba(0, 0, 0, 0)',*/
		plotBorderColor: lightGray/*,
		plotBorderWidth: 1,
		marginBottom: 55,
        marginTop:50,
        marginLeft: 52,
        marginRight: 20*/
	},
	title: {
/*		align: 'center',
		verticalAlign: 'top',*/
		/*y:12,*/
		style: {
			color: white,
   			font: typeface
		}
	},
	subtitle: {
/*		align: 'center',
		verticalAlign: 'top',*/
		/*y:31,*/
		style: {
			color: white,
   			font: typeface
		}
	},
	credits:{
		/*position: {
                align: 'left',
                x: 60
            },*/
		style: {
			color: '#ffffff',
			//color: white,
			//fill: lightGray,
   			font: typeface,
			fontSize: '9px'
		}
	},
	xAxis: {
		gridLineColor: medGray,
		labels: {
			style: {
				color: lightGray
			}
		},
		lineColor: lightGray,
		tickColor: lightGray,
		title: {
			style: {
				color: '#cccccc',
				/*fontWeight: 'bold',*/
				fontSize: '12px',
   			    font: typeface
			}
		}
	},
	yAxis: {
		gridLineColor: medGray,
		labels: {
			style: {
				color: '#cccccc'
			}
		},
		lineColor: '#cccccc',
		minorTickInterval: null,
		tickColor: '#cccccc',
		tickWidth: 1,
		title: {
			style: {
				color: '#cccccc',
				/*fontWeight: 'bold',*/
				fontSize: '12px',
   				font: typeface
			}
		}
	},
	tooltip: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		style: {
			color: '#cccccc'
		}
	},
	toolbar: {
		itemStyle: {
			color: 'silver'
		}
	},
	plotOptions: {
		line: {
			dataLabels: {
				color: '#cccccc'
			},
			marker: {
				lineColor: '#333'
			}
		},
		spline: {
			marker: {
				lineColor: '#333'
			}
		},
		scatter: {
			marker: {
				lineColor: '#333'
			}
		},
		candlestick: {
			lineColor: white
		},
		 pie: {
                allowPointSelect: true,
				 borderWidth: 0,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
					color: lightGray
                },
				/*style: {
					borderWidth: 0
				},*/
               showInLegend: true
            }
	},
	legend: {
		itemStyle: {
   			font: typeface,
			color: '#cccccc'
		},
		itemHoverStyle: {
			color: '#FFF'
		},
		itemHiddenStyle: {
			color: '#aaaaaa'
		}
	},
	credits: {
		style: {
			color: '#666'
		}
	},
	labels: {
		style: {
			color: '#cccccc'
		}
	},

	navigation: {
		buttonOptions: {
			symbolStroke: '#DDDDDD',
			hoverSymbolStroke: '#FFFFFF',
			theme: {
				fill: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0.4, '#606060'],
						[0.6, '#333333']
					]
				},
				stroke: '#000000'
			}
		}
	},

	// scroll charts
	rangeSelector: {
		buttonTheme: {
			fill: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
			stroke: '#000000',
			style: {
				color: '#CCC',
				/*fontWeight: 'bold'*/
				font: typefaceBold
			},
			states: {
				hover: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.4, '#BBB'],
							[0.6, '#888']
						]
					},
					stroke: '#000000',
					style: {
						color: 'white'
					}
				},
				select: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.1, '#000'],
							[0.3, '#333']
						]
					},
					stroke: '#000000',
					style: {
						color: 'yellow'
					}
				}
			}
		},
		inputStyle: {
			backgroundColor: '#333',
			color: 'silver'
		},
		labelStyle: {
			color: 'silver'
		}
	},

	navigator: {
		handles: {
			backgroundColor: '#666',
			borderColor: '#AAA'
		},
		outlineColor: '#CCC',
		maskFill: 'rgba(16, 16, 16, 0.5)',
		series: {

			color: '#7798BF',
			lineColor: '#A6C7ED'
		}
	},

	scrollbar: {
		barBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		barBorderColor: '#CCC',
		buttonArrowColor: '#CCC',
		buttonBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		buttonBorderColor: '#CCC',
		rifleColor: '#FFF',
		trackBackgroundColor: {
			linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			stops: [
				[0, '#000'],
				[1, '#333']
			]
		},
		trackBorderColor: '#666'
	},

	// special colors for some of the
	legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
	background2: 'rgb(35, 35, 70)',
	dataLabelsColor: '#444',
	textColor: '#cccccc',
	maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
//var highchartsOptions = Highcharts.setOptions(Highcharts.themeNight);



var themeDay = {
	colors: JPMcolors,
	chart: {
		backgroundColor: white,
		borderColor: white,
		borderWidth: 0,
		className: 'dayTheme',
		plotBorderColor: '#CCCCCC',
		plotBorderWidth: 1/*,
		marginBottom: 55,
        marginTop:50,
        marginLeft: 52,
        marginRight: 20*/
	},
	title: {
		style: {
			/*color: '#6D6E71',*/
			color: darkGray,
   			font: typeface
		}
	},
	subtitle: {
		/*y:33,*/
		style: {
			/*fontSize: '9px',*/
			color: darkGray,
   			font: typeface
		}
	},
	credits:{
		position:{
			align: 'left'/*,
			x:30,
			verticalAlign: 'bottom',
			y:30*/
		},
		style: {
			color: darkGray,
   			font: typeface,
			fontSize: '9px'
		}
	},
	xAxis: {
		gridLineColor: '#999999',
		labels: {
			style: {
				color: darkGray
			}
		},
		lineColor: lightGray,
		tickColor: lightGray,
		title: {
			style: {
				color: darkGray,
				/*fontWeight: 'bold',*/
				fontSize: '12px',
   			    font: typefaceBold

			}
		}
	},
	yAxis: {
		gridLineColor: '#999999',
		labels: {
			style: {
				color: darkGray,
			}
		},
		lineColor: lightGray,
		minorTickInterval: null,
		tickColor: lightGray,
		tickWidth: 1,
		title: {
			style: {
				color: darkGray,
				/*fontWeight: 'bold',*/
				fontSize: '12px',
   				font: typefaceBold
			}
		}
	},
	tooltip: {
		backgroundColor: 'rgba(255, 255, 255, 0.75)',
		style: {
			color: darkGray
		}
	},
	toolbar: {
		itemStyle: {
			color: 'silver'
		}
	},
	plotOptions: {
		line: {
			dataLabels: {
				color: '#CCC'
			},
			marker: {
				lineColor: 'rgba(255, 255, 255, 0.75)'
			}
		},
		spline: {
			marker: {
				lineColor: '#333'
			}
		},
		scatter: {
			marker: {
				lineColor: '#333'
			}
		},
		candlestick: {
			lineColor: white
		}, 
		pie: {
                allowPointSelect: true,
				 borderWidth: 0,
                cursor: 'pointer',
				 dataLabels: {
					color: medGrey,
					enabled: true
                 },
                 showInLegend: true
            }
	},
	legend: {
		itemStyle: {
   			font: typeface,
			color: '#666'
		},
		itemHoverStyle: {
			color: '#333'
		},
		itemHiddenStyle: {
			color: '#aaaaaa'
		}
	},
	credits: {
		style: {
			color: '#666'
		}
	},
	labels: {
		style: {
			color: '#CCC'
		}
	},

	navigation: {
		buttonOptions: {
			symbolStroke: '#DDDDDD',
			hoverSymbolStroke: '#FFFFFF',
			theme: {
				fill: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0.4, '#606060'],
						[0.6, '#333333']
					]
				},
				stroke: '#000000'
			}
		}
	},

	// scroll charts
	rangeSelector: {
		buttonTheme: {
			fill: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
			stroke: '#000000',
			style: {
				color: '#CCC',
				/*fontWeight: 'bold'*/
				font: typefaceBold
			},
			states: {
				hover: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.4, '#BBB'],
							[0.6, '#888']
						]
					},
					stroke: '#000000',
					style: {
						color: white
					}
				},
				select: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.1, '#000'],
							[0.3, '#333']
						]
					},
					stroke: '#000000',
					style: {
						color: 'yellow'
					}
				}
			}
		},
		inputStyle: {
			backgroundColor: '#333',
			color: 'silver'
		},
		labelStyle: {
			color: 'silver'
		}
	},

	navigator: {
		handles: {
			backgroundColor: '#666',
			borderColor: '#AAA'
		},
		outlineColor: '#CCC',
		maskFill: 'rgba(16, 16, 16, 0.5)',
		series: {
			color: '#7798BF',
			lineColor: '#A6C7ED'
		}
	},

	scrollbar: {
		barBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		barBorderColor: '#CCC',
		buttonArrowColor: '#CCC',
		buttonBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		buttonBorderColor: '#CCC',
		rifleColor: '#FFF',
		trackBackgroundColor: {
			linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			stops: [
				[0, '#000'],
				[1, '#333']
			]
		},
		trackBorderColor: '#666'
	},

	// special colors for some of the
	legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
	background2: 'rgb(35, 35, 70)',
	dataLabelsColor: '#444',
	textColor: '#C0C0C0',
	maskColor: 'rgba(255,255,255,0.3)'
};