/**
 * Created by hanyajie on 16-2-1.
 */
window.App = React.createClass({
    getInitialState: function() {
    return {
        pageSize: 10,
    }
}
, render: function() {
    return <div>
    <TopicListing pre_register={this.props.pre_register} pageSize={this.state.pageSize}/>
</div>
}

, handlePageSizeChange: function(e) {
    this.setState({
        pageSize: Number(e.target.value)
    })
}
})

window. TopicListing = React.createClass({
    getInitialState: function() {
    return {
        currentPage: 1,
    }
}

, componentWillReceiveProps: function(nextProps) {
    this.setState({
        currentPage: 1
    })
}

, render: function() {
    var page = this.getPage()
    console.log("----------------:",page)
    var topics = page.pre_register.map(function(item) {
            return                 <div className="pre-list">
                <li className="visitor-name">{item.visitor}</li>
        <li className="receive-name">{item.receive}</li>
<li className="register-time">{item.time}</li>
</div>

})
return <div>
<div className="pre-register-sign">
    <div className="visitor-name-sign">访客姓名</div>
    <div className="receive-sign">接待人</div>
    <div className="register-time-sign">登记日期</div>
    </div>
    {topics}
{pager(page)}
</div>
}

/**
 * Gets the current page of topics along with some pagination info.
 */
, getPage: function() {
    var start = this.props.pageSize * (this.state.currentPage - 1)
    var end = start + this.props.pageSize
    console.log("----start-----:",this.state.currentPage)

    return {
        currentPage: this.state.currentPage
        , pre_register: this.props.pre_register.slice(start, end)
        , numPages: this.getNumPages()
        , handleClick: function(pageNum) {
            return function() { this.handlePageChange(pageNum) }.bind(this)
        }.bind(this)
    }
}

/**
 * Calculates the total number of pages.
 */
, getNumPages: function() {
    var numPages = Math.floor(this.props.pre_register.length / this.props.pageSize)
    console.log("===========================++++++++++++",numPages)
    if (this.props.pre_register.length % this.props.pageSize > 0) {
        numPages++
    }
    return numPages
}

, handlePageChange: function(pageNum) {
    this.setState({currentPage: pageNum})
}
})

/**
 * Renders a pager component.
 */
function pager(page) {
    var pageLinks = []
    var num = []
    if (page.currentPage <= 0) {
    } else {
        console.log("============lalalalla:", page.numPages);
        $("#left_id").attr('disabled', "ture");
        console.log( $("#left_id").attr('disabled', "ture"))
    }
    pageLinks.push(<div className="left-page-link" id="left_id" onClick={page.handleClick(page.currentPage - 1)}>{"<"}</div>)
pageLinks.push(' ')
for (var i = 1;i<page.numPages+1;i++){
    num.push(i)
}
for (var i = 0;i<num.length;i++){
    pageLinks.push(<div className="current-page" onClick={page.handleClick(num[i])}>{num[i]}</div>)
}
    pageLinks.push(' ')
    pageLinks.push(<div className="right-page-link" id="right_id" onClick={page.handleClick(page.currentPage + 1)}>{">"}</div>)
return <div className="pager">{pageLinks}</div>
}



