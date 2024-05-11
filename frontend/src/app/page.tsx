'use client'

import Link from 'next/link';
import { Container, Button, Row, Col } from 'react-bootstrap'
import { FaCrosshairs } from 'react-icons/fa'
import TypeWriter from '@/components/Typewriter/type-writer';

export default function Home() {
  return (
    <Container className='mt-5'>
      <Row className='mt-8 justify-content-center'>
        <Col md={7} xs={12} className='text-center'>
          <h1 className='fw-bolder text-custom-gray-darker mb-5 lh-base display-5'>
           <TypeWriter text='Comida saudável e gostosa direto na sua casa.'/>
          </h1>
          <Link href="/restaurants">
            <Button variant='custom-red' size='lg' className='text-white'>
              <FaCrosshairs className='pb-1'/> 
              <span className='px-2'>ENCONTRAR AGORA</span>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
