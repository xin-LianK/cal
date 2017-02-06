var app = getApp();

//commonjs规范 让js变成完善地编程语言
// require();
var myMath = require( '../../utils/index.js' )

Page( {
    data: {
        firstNum: '',
        secondNum: '',
        operator: null,
        result: null,

        show: 0
    },

    setNum: function( e ) {
        var n = e.target.dataset.v
        console.log(n)
        if( !this.data.operator || !this.data.firstNum ) {
            if( n === '.' && this.data.firstNum.indexOf( '.' ) !== -1 ) {
                return;
            }
            var f = this.data.firstNum + n
            this.setData( {
                firstNum: f,
                show: f
            })
        } else {
            if( n === '.' && this.data.firstNum.indexOf( '.' ) !== -1 ) {
                return;
            }
            var f = this.data.secondNum + n
            this.setData( {
                secondNum: f,
                show: f
            })
        }
    },

    cal: function() {
        var f = parseFloat( this.data.firstNum )
        var s = parseFloat( this.data.secondNum )
        var r;
        if( !f || !s ) {
            return;
        } else {
            if( this.data.operator === '-' ) {
                r = f - s
            }
            if( this.data.operator === '+' ) {
                r = f + s
            }
            if( this.data.operator === '*' ) {
                r = f * s
            }
            if( this.data.operator === '/' ) {
                r = f / s
            }
            this.setData( {
                result: r.toFixed( 10 ),
                show: r,
                firstNum: String( r ),
                secondNum: '',
                operator: null,
            })
        }
    },
    setO: function( e ) {
        var v = e.target.dataset.v;
        this.setData( {
            operator: v
        })
    },
    clear: function() {
        this.setData( {
            firstNum: '',
            secondNum: '',
            operator: null,
            result: null,
            show: 0
        })

    },

    onLoad: function() {
        console.log( "" )
    },
    onShow: function() {
        console.log( "" )
    },
    onReady: function() {
        console.log( "" )
    },
    onHide: function() {
        console.log( "" )
    },
    onUnload: function() {
        console.log( "" )
    },
    onPullDownRefresh: function() {
        console.log( "" )
    }
})