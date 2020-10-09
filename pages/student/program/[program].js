import { useRouter } from 'next/router';
import Program from '../../../src/views/Program';
export default function programDetail() {
    const router = useRouter();
    return <Program id={router.query} />
}