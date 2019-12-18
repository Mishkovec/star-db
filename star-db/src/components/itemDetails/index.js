import React from 'react';
import styles from './itemDetails.module.css';

const ItemPoint = ({item, label, value}) => {
    return (
        <li className={styles.list_group_item}>
            <span className={styles.term}>{label} </span>
            <span>{item[value]}</span>                        
        </li>
    );
}
export {ItemPoint};

export default class ItemDetails extends React.Component {
    
    state = {
        item: null,
        image: null
    };
    
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if(this.props.id!==prevProps.id) {
            this.updateItem(); 
        }
        console.log(this.state.item)
    }
    updateItem() {
        const {id, getData, getImage} = this.props;
        if (!id) {
            return;
        }
        getData(id)
        .then((item)=>{
            this.setState({
                item:item,
                image: getImage(id)
            });
        });
    }
    render() {
        const {item, image} = this.state;
        if (!this.state.item) {
            return <span>Select a position from the list</span>
        }

        const {name, gender, birthYear, eyeColor} = item;
        return (
            <div className={styles.card}>
                <div className={styles.card_body}>
                    <img
                        className={styles.item_image}
                        src={image}
                    />
                    <div className={styles.info_card}>
                        <h4>{name}</h4>
                        <ul className={styles.list_group}>
                            {
                                React.Children.map(this.props.children, (child,idx)=>{
                                    return React.cloneElement(child, {item});
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};
