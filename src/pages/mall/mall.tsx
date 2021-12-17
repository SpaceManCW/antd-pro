import {getHeroList} from '../../services/ant-design-pro/heros'

export default () => {

    fetch('/api/herolist').then(res => {
        return res.json()
    }).then(res => {
        console.log(res);
    })

    getHeroList().then(res => {
        console.log('res:', res);
        
    })
    return (
        <div>新页面</div>
    )
}   