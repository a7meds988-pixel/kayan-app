import { useParams } from 'react-router-dom';

export default function CustomerDetails() {
  const { id } = useParams();
  return (
    <main style={{ padding: 30 }}>
      <h1>👤 صفحة عميل #{id}</h1>
      <p>تفاصيل الفواتير والربح من العميل ده.</p>
    </main>
  );
}