/**
 * Created by hanyajie on 16-1-18.
 */
var Main = React.createClass({
    render: function() {
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
                <div className="third-block" id="calendar">{window.CalendarControl}</div>
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
                    <div className="date" >周四:2016年1月21日</div>
                    <div className="pre-register-sign">
                        <div className="visitor-name-sign">访客姓名</div>
                        <div className="receive-sign">接待人</div>
                        <div className="register-time-sign">登记日期</div>
                    </div>
                </div>
            </div>
        )
    }
});
ReactDOM.render(
<Main/>,
    document.getElementById('example')
);