import { Icon } from "../Icon/Icon";

type TFileProps = {
  name: string;
}

const File = (props: TFileProps) => {
  const { name } = props;

  return (
    <div className="file">
      <Icon type="file"></Icon>
      <span>{name}</span>
    </div>
  )
}

export { File };
