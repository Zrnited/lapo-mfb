export interface TodoCardProps {
  title: string;
  isCompleted: boolean;
}

export default function TodoCard({ title, isCompleted }: TodoCardProps) {
  return (
    <div className="todocard">
      <p>{title}</p>
      <input type="checkbox" checked={isCompleted} height={20} width={20} />
    </div>
  );
}
