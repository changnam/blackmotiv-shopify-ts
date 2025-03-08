type ArrowComponentProps = {
  href: string;
  text: string;
};

const ArrowComponent = ({ href, text }: ArrowComponentProps) => {
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  );
};

const ArrowPage = () => (
  <ul>
    <ArrowComponent href="https://google.com" text="got to google" />
    <ArrowComponent href="https://facebook.com" text="go to facebook" />
    <ArrowComponent href="htps://github.com" text="got to github" />
  </ul>
);

export default ArrowPage;
