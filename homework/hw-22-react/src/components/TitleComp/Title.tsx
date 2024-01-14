interface TitleProps {
  textButton: string;
}

const Title = ({ textButton }: TitleProps) => {
  return <button className="btn-title">{textButton}</button>;
};

export default Title;
