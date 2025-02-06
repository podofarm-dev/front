import { Solved, columns } from '@/app/_components/solved/SolvedColumns';
import { SolvedDataTable } from '@/app/_components/solved/SolvedDataTable';

async function getData(): Promise<Solved[]> {
  // Fetch data from your API here.
  const mockProblems: Solved[] = Array.from({ length: 568 }, (_, index) => ({
    id: `problem-${index + 1}`,
    number: index + 1,
    title: `Problem ${index + 1}`,
    category: '자료구조',
    difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
    time: `${index + 1}M`,
    date: '24.01.22',
  }));

  return mockProblems;
}

const SolvedList = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <SolvedDataTable columns={columns} data={data} />
    </div>
  );
};

export default SolvedList;
