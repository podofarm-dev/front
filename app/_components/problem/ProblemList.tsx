import { Problem, columns } from '@/app/_components/problem/ProblemColumns';
import { ProblemDataTable } from '@/app/_components/problem/ProblemDataTable';

async function getData(): Promise<Problem[]> {
  // Fetch data from your API here.
  const mockProblems: Problem[] = Array.from({ length: 568 }, (_, index) => ({
    id: `problem-${index + 1}`,
    number: index + 1,
    status: Math.random() < 0.5,
    title: `Problem ${index + 1}`,
    difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
    solved: Array.from({ length: Math.floor(Math.random() * 10) }, (_, i) => `user-${i + 1}`),
  }));

  return mockProblems;
}

const ProblemList = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <ProblemDataTable columns={columns} data={data} />
    </div>
  );
};

export default ProblemList;
