export const SecurityAndPayments = () => (
  <section id="security-payments" className="container py-16 sm:py-20">
    <div className="text-center mb-12">
      <h2 className="text-lg text-primary mb-2 tracking-wider">Sigurno Plaćanje Karticama</h2>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Vaša sigurnost je naš prioritet</h2>
    </div>

    <div className="text-lg text-muted-foreground space-y-6">
      <p>
        Platforma SimUp koristi Monri Payment Gateway, jedan od najsigurnijih sistema za online plaćanja. Monri omogućava plaćanja u realnom vremenu kreditnim i debitnim karticama, kao i drugim metodama plaćanja.
      </p>
      <h3 className="text-2xl font-semibold mt-8">Izjava o sigurnosti kupovine kreditnim karticama</h3>
      <p>
        Povjerljivost vaših podataka je zaštićena i osigurana korištenjem najnovije TLS enkripcije. Stranice za web plaćanje su osigurane korištenjem Secure Socket Layer (SSL) protokola sa 128-bitnom enkripcijom podataka. SSL enkripcija je procedura kodiranja podataka za sprječavanje neovlaštenog pristupa tokom prenosa podataka.
      </p>
      <p>
        Ovo omogućava siguran prijenos podataka i sprječava neovlašteni pristup podacima tokom komunikacije između korisnika i Monri WebPay Payment Gateway sistema i obrnuto.
      </p>
      <p>
        Monri WebPay Payment Gateway i finansijske institucije razmjenjuju podatke putem svoje virtualne privatne mreže (VPN), koja je također zaštićena od neovlaštenog pristupa.
      </p>
      <p>
        Monri Payments je pružatelj usluga plaćanja sa PCI DSS Level 1 certifikatom.
      </p>
      <p>
        Brojevi kreditnih kartica se ne pohranjuju kod trgovca i nisu dostupni neovlaštenom osoblju.
      </p>
      <h3 className="text-2xl font-semibold mt-8">Jednostavna i sigurna kupovina</h3>
      <p>
        Kupci mogu uživati u sigurnoj i bezbrižnoj kupovini na platformi eSIMFly, znajući da su njihovi podaci zaštićeni i sigurni.
      </p>
    </div>
  </section>
);
