import { FC } from "react";

type ArrowComponentProps = {
  href: string;
  text: string;
}

const ArrowComponent: FC<ArrowComponentProps> = (props) => {
  const {href, text} = props;

  return (
    <li><a href={href}><p>{text}</p></a></li>
  )
}

const ArrowPage = ({href,text}:ArrowComponentProps) => (
  <ul>
    <ArrowComponent href="https://google.com" text="got to google" />
    <ArrowComponent href="https://facebook.com" text="go to facebook" />
  </ul>
)
export default ArrowPage;