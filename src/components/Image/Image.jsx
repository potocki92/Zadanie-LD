import { StyledImage } from "./Image.styled"

export const Image = ({image, style}) => {
    console.log(image);
    return (
        <StyledImage srcSet={`${image.imageSource} 1x, ${image.retina} 2x`} width={image.width} alt={image.alt} className={image.class} style={style}/>
    )
}