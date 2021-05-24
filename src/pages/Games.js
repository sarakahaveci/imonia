import React from "react";
import {Table, Button} from "react-bootstrap";
import './Games.css';

function Games() {
  return (
    <div>
      <h1>Games List</h1>
      <div class="table-responsive">
        <table class="table table-bordered table-striped">
            <Table striped bordered hover variant="red">
            <thead>
              <tr>
                <th>Benzirsiz Adi</th>
                <th>Gurusen Isim</th>
                <th>Aciklama</th>
                <th>Olusturma Tarihi</th>
                <th>Bitis Tarihi</th>
                <th>Oyun Tarihi</th>
                <th>Oyun Durumu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AlGame</td>
                <td>Activity List Game</td>
                <td>Activity List Game</td>
                <td> 01.01.2021</td>
                <td>01.01.2021</td>
                <td>Bireyesel</td>
                <td>Acik</td>
                 <Button variant="outline-secondary">Duzenle</Button>{' '}
  
              </tr>
              <tr>
                <td>AlGame</td>
                <td>Activity List Game</td>
                <td>Activity List Game</td>
                <td> 01.01.2021</td>
                <td>01.01.2021</td>
                <td>Bireyesel</td>
                <td>Acik</td>
                 <Button variant="outline-secondary">Duzenle</Button>{' '}
  
              </tr>
              <tr>
                <td>AlGame</td>
                <td>Activity List Game</td>
                <td>Activity List Game</td>
                <td> 01.01.2021</td>
                <td>01.01.2021</td>
                <td>Bireyesel</td>
                <td>Acik</td>
                 <Button variant="outline-secondary">Duzenle</Button>{' '}
  
              </tr>
              <tr>
                <td>AlGame</td>
                <td>Activity List Game</td>
                <td>Activity List Game</td>
                <td> 01.01.2021</td>
                <td>01.01.2021</td>
                <td>Bireyesel</td>
                <td>Acik</td>
                 <Button variant="outline-secondary">Duzenle</Button>{' '}
  
              </tr>
              <tr>
                <td>AlGame</td>
                <td>Activity List Game</td>
                <td>Activity List Game</td>
                <td> 01.01.2021</td>
                <td>01.01.2021</td>
                <td>Bireyesel</td>
                <td>Acik</td>
                 <Button variant="outline-secondary">Duzenle</Button>{' '}
  
              </tr>
              <tr>
                <td>AlGame</td>
                <td>Activity List Game</td>
                <td>Activity List Game</td>
                <td> 01.01.2021</td>
                <td>01.01.2021</td>
                <td>Bireyesel</td>
                <td>Acik</td>
                 <Button variant="outline-secondary">Duzenle</Button>{' '}
  
              </tr>
              <tr>
                <td>AlGame</td>
                <td>Activity List Game</td>
                <td>Activity List Game</td>
                <td> 01.01.2021</td>
                <td>01.01.2021</td>
                <td>Bireyesel</td>
                <td>Acik</td>
                 <Button variant="outline-secondary">Duzenle</Button>{' '}
  
              </tr>
              <tr>
                <td>AlGame</td>
                <td>Activity List Game</td>
                <td>Activity List Game</td>
                <td> 01.01.2021</td>
                <td>01.01.2021</td>
                <td>Bireyesel</td>
                <td>Acik</td>
                <Button variant="outline-secondary">Duzenle</Button>{' '}
  
              </tr>
            </tbody>
          </Table>
          <Button className="button" variant="outline-secondary">Yeni Oyna Ekle</Button>{' '}
        </table>

        </div>
    </div>
  );
}

export default Games;
