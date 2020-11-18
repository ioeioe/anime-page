import React,{useState} from "react";
import { connect } from "react-redux";

import { BackgroundUpdateContainer,BackgroundUrlInput,BackgroundUrlButton} from './background-update.styles';

import {updateBackground} from '../../redux/collection/collection.actions';

const BackgroundUpdate = ({
  item,
  updateBackground,
}) => {
    console.log(item.mal_id);
    const [backgroundUrl,setBackgroundUrl] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setBackgroundUrl(value);
  }; 
  return (
    <BackgroundUpdateContainer>
        <BackgroundUrlInput   
        name="backgroundUrl"
        type="text"
        value={backgroundUrl}
        onChange={handleChange}>
        </BackgroundUrlInput>
        <BackgroundUrlButton onClick={()=>updateBackground(item.mal_id,backgroundUrl)}>Cập nhật ảnh nền</BackgroundUrlButton>
    </BackgroundUpdateContainer>

  )
}

const mapDispatchToProps = (dispatch) => ({
  updateBackground:(id,url)=>dispatch(updateBackground(id,url)),
});

export default connect(null, mapDispatchToProps)(BackgroundUpdate)
