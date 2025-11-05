import type { FC } from "react";

type Props = {
  id: string;
  project: any;
};

export const Card: FC<Props> = ({ id, project }) => (
  <div className="card">
    <a href={`projects/` + id}></a>
    <div className="card__cover">
      <img src={project.cover} />
    </div>
    <div className="card__title">{project.name}</div>
  </div>
);
