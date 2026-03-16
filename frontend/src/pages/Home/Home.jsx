import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import LogoArgen from '../../assets/images/LogoArgen.png';

function TransparentImage({ src, alt, className }) {
  const [outSrc, setOutSrc] = useState(src);

  useEffect(() => {
    let cancelled = false;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';
    img.src = src;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          if (r >= 248 && g >= 248 && b >= 248) {
            data[i + 3] = 0;
          }
        }

        ctx.putImageData(imageData, 0, 0);
        const url = canvas.toDataURL('image/png');
        if (!cancelled) setOutSrc(url);
      } catch {
        if (!cancelled) setOutSrc(src);
      }
    };

    img.onerror = () => {
      if (!cancelled) setOutSrc(src);
    };

    return () => {
      cancelled = true;
    };
  }, [src]);

  return <img className={className} src={outSrc} alt={alt} />;
}
export default function Home() {
  return (
    <main className="aw-home">
      <div className="aw-surface">
        <section className="aw-top">
          <header className="aw-brand" aria-label="ArgenWallet">
            <img className="aw-brand__img" src={LogoArgen} alt="ArgenWallet" />

            <nav className="aw-brand__actions" aria-label="Accesos">
              <Link className="aw-brand__btn aw-brand__btn--ghost" to="/login">
                Iniciar sesión
              </Link>
              <Link className="aw-brand__btn aw-brand__btn--solid" to="/register">
                Registrarse
              </Link>
            </nav>
          </header>

          <div className="aw-grid">
            <div className="aw-copy">
              <h1 className="aw-h1">
                Vinimos a
                <br />
                revolucionar
                <br />
                tus ventas
              </h1>

              <p className="aw-lead">
                Cobrá fácil. Acreditá rápido.
                <br />
                Controlá todo desde un solo lugar.
              </p>

              <div className="aw-free">
                Obtenela <span className="aw-free__tag">GRATIS</span>
              </div>

              <h2 className="aw-h2">
                Acepta todos los medios de pago
                <br />
                <span>con la tecnología de E-pagos</span>
              </h2>

              <div className="aw-payrow" aria-label="Medios de pago">
                <div className="aw-pay">
                  <img className="aw-pay__img" src="/aw-icons/qr-debito.png" alt="QR" />
                  <div className="aw-pay__label">
                    QR
                    <br />
                  </div>
                </div>
                <div className="aw-pay">
                  <img className="aw-pay__img" src="/aw-icons/tarjetas-debito.png" alt="Tarjetas" />
                  <div className="aw-pay__label">
                    Tarjetas
                    <br />
                    de débito
                  </div>
                </div>
                <div className="aw-pay">
                  <img className="aw-pay__img" src="/aw-icons/tarjetas-credito.png" alt="Tarjetas" />
                  <div className="aw-pay__label">
                    Tarjetas
                    <br />
                    de crédito
                  </div>
                </div>
                <div className="aw-pay">
                  <img className="aw-pay__img" src="/aw-icons/billeteras.svg" alt="Billeteras" />
                  <div className="aw-pay__label">
                    Tarjetas
                    <br />
                    virtuales
                  </div>
                </div>
              </div>

              <ul className="aw-list" aria-label="Comisiones y plazos">
                <li>
                  <span className="aw-check" aria-hidden="true">✓</span>
                  <span>
                    Dinero en cuenta. <strong>1% + IVA</strong> - Acreditación en 24 hs hábiles bancarias
                  </span>
                </li>
                <li>
                  <span className="aw-check" aria-hidden="true">✓</span>
                  <span>
                    Tarjeta de Débito - <strong>3,74% + IVA</strong> - 48 hs hábiles bancarias
                  </span>
                </li>
                <li>
                  <span className="aw-check" aria-hidden="true">✓</span>
                  <span>
                    Tarjeta de Crédito - <strong>5,24% + IVA</strong> - 48 hs hábiles bancarias
                  </span>
                </li>
                <li>
                  <span className="aw-check" aria-hidden="true">✓</span>
                  <span>
                    Comisión <strong>ARGENWALLET 2% + IVA</strong> por cupón acreditado y liquidado.
                  </span>
                </li>
              </ul>

              <div className="aw-chips" aria-label="Beneficios">
                <div className="aw-chip">
                  <span className="aw-check" aria-hidden="true">✓</span>
                  Acreditación rápida
                </div>
                <div className="aw-chip">
                  <span className="aw-check" aria-hidden="true">✓</span>
                  Sin costo de adhesión
                </div>
                <div className="aw-chip">
                  <span className="aw-check" aria-hidden="true">✓</span>
                  Pagás solo por venta
                </div>
                <div className="aw-chip">
                  <span className="aw-check" aria-hidden="true">✓</span>
                  Empezás a vender
                </div>
              </div>
            </div>

            <div className="aw-mock" aria-hidden="true">
              <div className="aw-mock__frame">
                <TransparentImage className="aw-mock__img" src="/posneFree.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="aw-card" aria-label="Tu dinero, donde vos elijas">
          <div className="aw-card__copy">
            <h3 className="aw-card__h">Tu dinero, donde vos elijas.</h3>
            <p className="aw-card__p">
              Acreditá tus ventas en tu cuenta bancaria o virtual favorita.
              <br />
              Administrá y retirá tus fondos cuando quieras desde nuestro
              <br />
              dashboard online.
            </p>
            <p className="aw-card__p aw-card__p--strong">
              Más ventas. Más control.
              <br />
              Tu dinero disponible cuando lo necesites.
            </p>
            <p className="aw-card__fine">
              No importa el tamaño de tu negocio, lo que importa es dar el paso.
            </p>
          </div>

          {/* <a className="aw-card__btn" href="#">
            PEDÍ TU TERMINAL <span className="aw-card__btnIcon" aria-hidden="true">›</span>
          </a> */}
        </section>
      </div>
    </main>
  );
}
