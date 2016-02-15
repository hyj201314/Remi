/**
 * Created by hanyajie on 16-1-18.
 */
var CalendarControl = window.CalendarControl;
window.Main = React.createClass( {
    getInitialState: function(){
        return {
            list:[]
        }
    },
    componentDidMount:function(){
        var self = this;
        $.ajax({
            url:"../pre_register.json",
            dataType:"json",
            async:true,
            success:function(data){
                self.setState({
                    list:data["pre_register"]
                })
            }
        })
    },
    render: function() {
        var newDate =  new Date();
        var year = newDate.getFullYear();
        var month = newDate.getMonth();
        var day = newDate.getDate();
        var week=newDate.getDay()
        var weeks=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
        return (
            <div>
                <div className="title">
                    <div className="sign-block">
                        <div className="sign">R</div>
                        <div className="city">RemiBeijing</div>
                    </div>
                    <div className="list">
                        <li className="control-desk">控制台</li>
                        <li className="employee">员工</li>
                        <li className="setting">设置</li>
                    </div>
                </div>
                <div className="second-block">
                    <div className="visitor">已到访客</div>
                    <div className="pre-register">预约</div>
                </div>
                <div className="third-block" id="calendar">
                    <CalendarControl />
                </div>
                <div className="fourth-block">
                    <div className="visitor-list">
                    访客列表
                        <div className="left-sign">
                            <div className="left-out">
                                <div className="left-in">
                                </div >
                            </div>
                        </div>
                        <button className="date-sign">
                        今天
                        </button>
                        <div className="right-sign">
                             <div className="right-out">
                                 <div className="right-in">
                                 </div >
                             </div>
                        </div>
                    </div>
                    <div className="date" >{weeks[week]},{year}年{month}月{day}日</div>
                    <window.App pre_register={this.state.list}/>
                </div>
            </div>
        )
    }
});
