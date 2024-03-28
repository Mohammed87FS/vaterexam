const questionsAndAnswers = [
  {
    question: `1)	In welchem Drehzahlbereich des Motors fährt man mit den besten Verbrauchswerten?`,
    answer: `Im am Drehzahlmesser grün gekennzeichneten Bereich.`
  },
  {
    question: `2)	Sie befahren eine Steigung. Wann müssen Sie bei Fahrzeugen mit manuellem Schaltgetriebe
      zurückschalten?`,
    answer: `Wenn die Motordrehzahl trotz Vollgas unter den "grünen Bereich" des Drehzahlmessers Fällt.`
  },
  {
    question: `3)	Welche Folgen für das Drehmoment hat es, wenn mit einer Motordrehzahl außerhalb des
      "grünen Bereiches" gefahren wird?`,
    answer: `Das Drehmoment fällt ab.`
  },
  {
    question: `4)	Welche Folgen für den Kraftstoffverbrauch hat es, wenn mit einer Motordrehzahl außerhalb
      des "grünen Bereiches" gefahren wird?`,
    answer: `Der Kraftstoffverbrauch steigt an.`
  },
  {
    question: `5)	Wodurch kann eine Verminderung der schädlichen Anteile im Abgas eines Dieselmotors
      erzielt werden?`,
    answer: `Durch einen SCR-Katalysator und Zuführung von "AdBlue".`
  },
  {
    question: `6)	Welche Motorarten werden bei Nutzfahrzeugen hauptsächlich eingesetzt?`,
    answer: `Dieselmotor.`
  },
  {
    question: `7)	Am Armaturenbrett Ihres Fahrzeuges befindet sich ein Drehzahlmesser. Wofür steht das
      grüne Kennfeld?`,
    answer: `Für den spezifisch geringsten Kraftstoffverbrauch des Motors.`
  },
  {
    question: `8)	Am Armaturenbrett Ihres Fahrzeuges befindet sich ein Drehzahlmesser. Was zeigt das rote
      Kennfeld an?`,
    answer: `Den Drehzahlbereich, in dem der Motor nicht betrieben werden soll.`
  },
  {
    question: `9)	Warum soll der Motor im "grünen Bereich" des Drehzahlmessers betrieben werden?`,
    answer: `Um den geringsten spezifischen Kraftstoffverbrauch des Motors zu nutzen.`
  },
  {
    question: `10)	Wodurch kann eine Verminderung der schädlichen Anteile im Abgas eines Dieselmotors
      erzielt werden?`,
    answer: `Durch Abgasrückführung in Kombination mit einem Dieselpartikelfilter.`
  },
  {
    question: `11)	Welche Vorteile hat es, dass die Federspeicherbremsanlage durch Entlüften eingebremst
       wird?`,
    answer: `Das Fahrzeug bleibt auch bei einem Luftverlust in den Vorratsbehältern eingebremst.`
  },
  {
    question: `12)	Sie lenken ein vollbeladenes Fahrzeug. Welche Handlungen schaden der Lenkung?`,
    answer: `Lenken am Stand.`
  },
  {
    question: `13)	Welches Bremssystem ist bei schweren Nutzfahrzeugen als Betriebsbremse in der Regel
      eingebaut?`,
    answer: `Eine Druckluftbremsanlage.`
  },
  {
    question: `14)	Wozu dient das Entwässerungsventil an den Vorratsbehältern einer Druckluftbremsanlage?`,
    answer: `Damit die Funktionstüchtigkeit eines Lufttrockners überprüft werden kann.`
  },
  {
    question: `15)	Das Aufpumpen der Vorratsbehälter einer Druckluftbremsanlage dauert wesentlich länger
      als gewöhnlich. Was kann die Ursache dafür sein?`,
    answer: `Undichtheiten im Vorratssystem.`
  },
  {
    question: `16)	Ihr Fahrzeug hat eine Druckluftbremsanlage. Woran erkennen Sie einen Tristopzylinder?`,
    answer: `Am Bremsgestänge Er hat zwei Zuleitungen.`
  },
  {
    question: `17)	Der Vorratsdruck einer Druckluftbremsanlage fällt bei einer Vollbremsung um mehr als 0,7
       bar ab. Welche Ursache kann dies haben?`,
    answer: `Undichtheit in den Bremskreisen.`
  },
  {
    question: `18)	Sie fahren mit einem voll beladenen Fahrzeug in einem längeren Gefälle. Wie können Sie die
      Wirkung der Verlangsameranlage verstärken?`,
    answer: `Durch Zurückschalten auf einen niedrigen Getriebegang.`
  },
  {
    question: `19)	Die Warnleuchte für den Druckluftvorrat der Bremsanlage leuchtet auf. Was bedeutet das?`,
    answer: `Der Vorratsdruck ist stark abgesunken.`
  },
  {
    question: `20)	Die Warnleuchte für den Druckluftvorrat leuchtet auf. Wie verhalten Sie sich?`,
    answer: `Ich halte an und sehe in der Betriebsanleitung nach, was zu tun ist.`
  },
  {
    question: `21)	Ihr Fahrzeug hat einen technischen Defekt an der Druckluftbremsanlage. Die
      Federspeicherbremse kann wegen eines zu geringen Vorratsdrucks nicht mehr gelöst
      werden. Was müssen Sie tun, um das Fahrzeug abschleppen zu können?`,
    answer: `Ich muss den Federspeicher mechanisch oder durch Fremdbelüften lösen.`
  },
  {
    question: `22)	Womit können Sie die Wirkung einer Motorstaubremse abstufen?`,
    answer: `Mit einem Hebel an der Lenksäule oder einem Schalter am Armaturenbrett.`
  },
  {
    question: `23)	Sie befahren mit Ihrem voll beladenen Fahrzeug eine längere Gefällestrecke. Welche Gefahr
       besteht, wenn Sie dabei durchgehend die Betriebsbremse verwenden?`,
    answer: `Die Radbremsen können überhitzen und ausfallen.`
  },
  {
    question: `24)	Sie befahren mit Ihrem Fahrzeug eine längere Gefällestrecke. Welche Bremse sollten Sie
      überwiegend verwenden?`,
    answer: `Die Verlangsameranlage.`
  },
  {
    question: `25)	Sie machen die tägliche Abfahrtskontrolle. Was müssen Sie bei der Druckluftbremsanlage
       kontrollieren?`,
    answer: `Ob bei abgestelltem Motor Zischgeräusche aus der Druckluftbremsanlage hörbar sind.`
  },
  {
    question: `26)	Sie machen die tägliche Abfahrtskontrolle. Dabei hören Sie bei abgestelltem Motor
      Zischgeräusche aus der Druckluftbremsanlage. Wie müssen Sie sich verhalten?`,
    answer: `Ich darf das Fahrzeug nicht in Betrieb nehmen und verständige den Zulassungsbesitzer.`
  },
  {
    question: `27)	Sie überprüfen die Dichtheit der Vorratskreise. Um wieviel darf der Druck in 10 Minuten
      absinken?`,
    answer: `Nicht merkbar.`
  },
  {
    question: `28)	Sie überprüfen die Dichtheit des Vorratskreises. Um wie viel darf der Druck in 3 Minuten
      absinken?`,
    answer: `Nicht merkbar.`
  },
  {
    question: `29)	Sie fahren mit einem voll beladenen Fahrzeug in einem längeren Gefälle. Woran können Sie
       erkennen, dass die Motorbremswirkung ausreicht?`,
    answer: `Die Fahrgeschwindigkeit bleibt ohne zu bremsen annähernd gleich.`
  },
  {
    question: `30)	Welche Aufgabe hat das Traktionskontrollsystem?`,
    answer: `Es erleichtert das Anfahren bei rutschigen Fahrbahnverhältnissen.`
  },
  {
    question: `31)	Welche Aufgabe hat das elektronische Stabilitätssystem "ESP"?`,
    answer: `Es vermindert die Schleudergefahr bei rutschigen Fahrbahnverhältnissen.`
  },
  {
    question: `32)	Ihr Fahrzeug ist mit einem Notbremsassistenzsystem ausgestattet. Wann kann dieses System versagen?`,
    answer: `Wenn der Abstandssensor verschmutzt ist oder durch die Witterung in seiner Funktion beeinträchtigt wird.`
  },
  {
    question: `33)	Ihr Fahrzeug ist mit einem Abstandsregeltempomat ausgestattet. Was ist der Vorteil dieses
      Assistenzsystems?`,
    answer: `Stressfreieres Fahren und die Gefahr eines Auffahrunfalles wird verringert.`
  },
  {
    question: `34)	Was ist der Unterschied zwischen einem "Tempomat" und einem "Limiter"?`,
    answer: `Beim "Limiter" muss Gas gegeben werden, um die Geschwindigkeit zu halten. Der"Tempomat" hält die        Geschwindigkeit, auch wenn kein Gas gegeben wird.`
  },
  {
    question: `35)	Was ist ein "ABS"?`,
    answer: `Ein Anti-Blockier-System.`
  },
  {
    question: `36)	Was verstehen Sie unter dem "Abschaltdruck" einer Druckluftbremsanlage?`,
    answer: `Der Druck, ab dem der Kompressor keine Luft in die Vorratsbehälter fördert.`
  },
  {
    question: `37)	Was verstehen Sie unter dem "Einschaltdruck" einer Druckluftbremsanlage?`,
    answer: `Das ist der Druck, bei dem der Druckregler die vom Kompressor geförderte Luft wieder in
        die Luftbehälter lässt.`
  },
  {
    question: `38)	Was verstehen Sie unter dem "Sicherungsdruck" einer Druckluftbremsanlage?`,
    answer: `Das ist jener Druck, der bei Ausfall eines Druckluftkreises erhalten bleiben muss.`
  },
  {
    question: `39)	Was verstehen Sie unter dem "Betriebsdruck" einer Druckluftbremsanlage?`,
    answer: `Ist jener Druck, ab dem mit dem Fahrzeug gefahren werden darf.`
  },
  {
    question: `40)	Was verstehen Sie unter einem "EBS-Bremssystem"?`,
    answer: `Eine Bremsanlage, die vollständig elektronisch geregelt wird.`
  },
  {
    question: `41)	Was verstehen Sie unter einer "Druckluftbremsanlage"?`,
    answer: `Eine Bremsanlage, bei der die Bremskraft durch Druckluft erzeugt wird.`
  },
  {
    question: `42)	Was verstehen Sie unter einer ALB-Regelung bei einer Druckluftbremsanlage?`,
    answer: `Eine Regelung, welche die Bremskraft an den Achsen nach dem Beladungszustand
        automatisch anpasst.`
  },
  {
    question: `43)	Was ist eine Verlangsameranlage?`,
    answer: `Ein System, mit dem die Geschwindigkeit verschleißfrei vermindert werden kann.`
  },
  {
    question: `44)	Welche Aufgabe hat der Druckregler einer Druckluftbremsanlage?`,
    answer: `Er regelt den Betriebsdruck zwischen Ein- und Abschaltdruck.`
  },
  {
    question: `45)	Welche Aufgabe hat der Lufttrockner einer Druckluftbremsanlage?`,
    answer: `Der vom Kompressor geförderten Luft die Feuchtigkeit zu entziehen.`
  },
  {
    question: `46)	Was ist ein "Tristopzylinder" bei einer Druckluftbremsanlage?`,
    answer: `Eine Kombination aus Membran- und Federspeicherzylinder.`
  },
  {
    question: `47)	Welche der folgenden Bremsanlagen funktioniert ohne nennenswerten Verschleiß?`,
    answer: `Hydraulische Strömungsbremse (Retarder).`
  },
  {
    question: `48)	Welchen Vorteil hat ein elektronisch geregeltes Bremssystem gegenüber einer
      Druckluftbremse ohne EBS?`,
    answer: `Die Ansprechzeit der Druckluftbremsanlage ist wesentlich kürzer.`
  },
  {
    question: `49)	Welchen Zweck haben Verlangsameranlagen?`,
    answer: `Sie entlasten und schonen die Betriebsbremsanlage.`
  },
  {
    question: `50)	Woran erkennen Sie nach dem Starten des Fahrzeugmotors, dass die Druckluftbremsanlage
      den Betriebsdruck erreicht hat?`,
    answer: `Die Kontrolllampen erlöschen, der Warnsummer verstummt.`
  },
  {
    question: `51)	Während der Fahrt leuchtet die ABS-Kontrollleuchte auf. Wie verhalten Sie sich?`,
    answer: `Haltemöglichkeit aufsuchen, Motor abstellen und nochmals starten; falls die Kontrollleuchte immer noch   leuchtet, Werkstätte aufsuchen.`
  },
  {
    question: `52)	Wodurch kann es zum Überhitzen der Radbremsen kommen?`,
    answer: `Durch ständiges Bremsen mit der Betriebsbremsanlage beim Bergabfahren.`
  },
  {
    question: `53)	Können Sie die Wirkung der Motorstaubremse abstufen?`,
    answer: `Ja, über die Wahl des Getriebeganges.`
  },
  {
    question: `54)	Sie fahren bergauf. Die Anzeige des Drehzahlmessers wandert aus dem grünen Bereich in
      den roten. Was müssen Sie tun?`,
    answer: `Auf einen höheren Getriebegang schalten.`
  },
  {
    question: `55)	Wodurch lässt sich Kraftstoff einsparen?`,
    answer: `Durch frühes Hochschalten.`
  },
  {
    question: `56)	Was führt zu einer Verminderung des Kraftstoffverbrauches?`,
    answer: `Fahren im "grünen" Bereich des Drehzahlmessers.`
  },
  {
    question: `57)	Wo finden Sie Angaben über den optimalen Drehzahlbereich Ihres Fahrzeuges?`,
    answer: `In der Betriebsanleitung des Fahrzeuges.`
  },
  {
    question: `58)	Wozu dient der grüne Bereich des Drehzahlmessers des Motors?`,
    answer: `Er zeigt den Drehzahlbereich des Motors mit dem geringsten spezifischen Kraftstoffverbrauch unter Volllast und   den  Drehmoment an.`
  },
  {
    question: `59)	Sie fahren im Ortsgebiet hinter anderen Fahrzeugen. Wie groß sollte ein angemessener
      Sicherheitsabstand mindestens sein?`,
    answer: `2 Sekunden.`
  },
  {
    question: `60)	Sie fahren mit einem 8 m langen Fahrzeug im Freiland. Vor Ihnen fährt ein Sattelkraftfahrzeug. Welchen Mindestabstand müssen Sie einhalten, wenn Sie nicht überholen wollen oder dürfen?`,
    answer: `Den erforderlichen Sicherheitsabstand, jedoch mindestens 50 m.`
  },
  {
    question: `61)	Welchen Sicherheitsabstand haben Sie als Lenker eines 8 m langen Fahrzeuges auf
 Freilandstraßen einzuhalten, wenn Sie hinter einem Fahrzeug mit größeren Längsabmessungen (z.B. Lkw oder Omnibus) fahren?`,
    answer: `50 m.`
  },
  {
    question: `62)	Sie fahren mit einem Nutzfahrzeug bei Schneefall auf einer Autobahn. Wie sollten Sie sich
       verhalten?`,
    answer: `Ich achte auf einen ausreichenden Sicherheitsabstand zu den vor mir fahrenden Fahrzeugen und achte im        Verkehrsfunk auf Meldungen über den Straßenzustand auf diesem Autobahnteilstück.`
  },
  {
    question: `63)	Sie lenken in einem Gegenverkehrsbereich einer Autobahn ein Nutzfahrzeug. Sie bemerken,
      dass der rechte vordere Reifen defekt geworden ist. Wie sollten Sie sich verhalten?`,
    answer: `Ich schalte die Alarmblinkanlage ein, bremse ab und fahre in die nächste Pannenbucht.`
  },
  {
    question: `64)	Sie befahren mit einem Nutzfahrzeug ein schneebedecktes Gefälle. Das Gefälle ist gestreut
      und hat eine Neigung von 15 %. Benötigt das Nutzfahrzeug Schneeketten?`,
    answer: `Ja, auf den Antriebsrädern und auf den gelenkten Vorderrädern.`
  },
  {
    question: `65)	Sie befahren mit einem Nutzfahrzeug ein schneebedecktes Gefälle. Das Gefälle ist gestreut
      und hat eine Neigung von 15 %. Mit welchen Gefahren müssen Sie rechnen, wenn Sie
      versuchen, das Gefälle ohne Schneeketten zu bewältigen?`,
    answer: `Das Fahrzeug könnte ins Rutschen kommen und nicht mehr lenkbar werden.`
  },
  {
    question: `66)	Welche Tätigkeiten können beim Lenken eines Fahrzeuges stark ablenken?`,
    answer: `Das Rauchen von Zigaretten, Essen von Speisen, Trinken.`
  },
  {
    question: `67)	Sie lenken einen Omnibus im Linienverkehr und wollen im Ortsgebiet von einer Haltstelle
      abfahren. Dabei dürfen Sie nachkommende Verkehrsteilnehmer nicht gefährden. Wann liegt
      eine Gefährdung Nachkommender vor?`,
    answer: `Wenn Nachkommende nicht mehr gefahrlos ausweichen oder anhalten können.`
  },
  {
    question: `68)	Was haben Sie zu beachten, wenn Sie an der Haltestelle Kinder aus Ihrem Schulbus
      aussteigen lassen?`,
    answer: `Ich muss die Alarmblinkanlage und zusätzliche Warnleuchten, welche in der Heckscheibe oder am Dach des    Busses montiert sind, einschalten.`
  },
  {
    question: `69)	Welche Vorteile bringt eine sorgfältige Routenplanung?`,
    answer: `Lenkpausen können vorab so geplant werden, dass sie zum optimalen Zeitpunkt an einem geeigneten Ort   gehalten werden können. Auch können Stoßzeiten und stauanfällige Straßen vermieden werden.`
  },
  {
    question: `70)	Welchen Sicherheitsabstand haben Sie als Lenker eines Omnibusses auf Freilandstraßen
      mindestens einzuhalten, wenn Sie hinter einem Fahrzeug mit größeren Längsabmessungen
      (z.B. LKW oder Omnibus) fahren?`,
    answer: `50 m.`
  },
  {
    question: `71)	Wie viele Personen dürfen Sie in einem Omnibus befördern, wenn Sie im Gelegenheitsverkehr    fahren?`,
    answer: `So viel wie Sitzplätze in der Zulassungsbescheinigung eingetragen sind.`
  },
  {
    question: `72)	Ihr Omnibus ist mit Stehplätzen ausgerüstet. Dürfen dort Fahrgäste befördert werden?`,
    answer: `Ja, wenn im Linienverkehr gefahren wird.`
  },
  {
    question: `73)	Sie lenken einen Omnibus im Gelegenheitsverkehr. Was müssen Sie beachten, wenn Sie
      Kinder oder Jugendliche im Alter zwischen 3 und 14 Jahren befördern?`,
    answer: `Die Kinder oder Jugendlichen müssen die Sicherheitsgurte verwenden, falls solche vorhanden sind.`
  },
  {
    question: `74)	Sie wollen mit Ihrem Omnibus im Rahmen einer Ausflugsfahrt nach einer zweistündigen
       Mittagspause weiterfahren. Was haben Sie vor der Abfahrt zu tun?`,
    answer: `Ich muss eine Bremsprobe durchführen.`
  },
  {
    question: `75)	Sie wollen mit Ihrem Omnibus im Rahmen einer Ausflugsfahrt nach einer zweistündigen
       Mittagspause weiterfahren. Wie führen Sie die vorgeschriebene Bremsprobe durch?`,
    answer: `Ich achte vor der Abfahrt am Manometer der Betriebsbremsanlage darauf, ob während der
        Fahrtpause ein sichtbarer Druckabfall eingetreten ist und mache bei der Abfahrt eine gefühlvolle    Betriebsbremsung.`
  },
  {
    question: `76)	Sie sollen mit Ihrem Omnibus Angehörige eines Fußballvereines zu einem Fußballspiel
       befördern. Beim Einsteigen der Fahrgäste bemerken Sie, dass einzelne Fahrgäste
       pyrotechnische Gegenstände mit sich führen. Wie sollten Sie sich verhalten?`,
    answer: `Ich fordere diese Fahrgäste höflich auf, diese Gegenstände gesichert im Gepäckraum des  Omnibusses   unterzubringen.`
  },
  {
    question: `77)	Ein Fahrgast möchte bei der Fahrt im Omnibus unbedingt seinen Hund ohne Maulkorb
       lassen. Andere Fahrgäste beschweren sich darüber. Wie sollten Sie sich verhalten?`,
    answer: `Ich weise den Fahrgast höflich darauf hin, dass Hunde ohne Maulkorb (ausgenommen
        Assistenzhunde) von der Fahrt ausgeschlossen werden können, und zeige dem Fahrgast
       den entsprechenden Passus in den Betriebs- und Beförderungsbedingungen der Betriebsordnung.`
  },
  {
    question: `78)	Ein Fahrgast möchte bei der Fahrt im Omnibus unbedingt seinen Hund ohne Maulkorb
       lassen. Wie können Sie dem Fahrgast den entsprechenden Passus in den Betriebs- und
       Beförderungsbedingungen der Betriebsordnung zeigen, der das verbietet?`,
    answer: `Ich bin verpflichtet, einen Abdruck dieser Verordnung mitzuführen und auf Verlangen
         Fahrgästen vorzulegen.`
  },
  {
    question: `79)	Welche Einrichtungen eines Omnibusses müssen besonders sauber gehalten werden, um die
       Übertragung von Krankheitserregern zwischen den Fahrgästen möglichst zu verhindern?`,
    answer: `Die Griffstangen bei den Ein- und Ausstiegen sowie die Bord-Toilette.`
  },
  {
    question: `80)	Warum muss die Ladung in einem Omnibus gesichert werden?`,
    answer: `Damit Fahrer, Beifahrer, Fahrgäste und andere Verkehrsteilnehmer nicht gefährdet werden
        und die Ladung und der Omnibus nicht beschädigt werden.`
  },
  {
    question: `81)	In welchem Fall muss die Ladung durch die Ladungssicherung sicher im Gepäckraum bzw.
      Gepäckfächern Ihres Omnibusses gehalten werden?`,
    answer: `Bei scharfen Ausweichmanövern sowie Notbremsungen.`
  },
  {
    question: `82)	Wie groß ist der Beschleunigungsbeiwert, der bei der Ladungssicherung im Straßenverkehr
       nach vorne mindestens zu berücksichtigen ist?`,
    answer: `0,80.`
  },
  {
    question: `83)	Wie groß ist der Beschleunigungsbeiwert, der bei der Ladungssicherung im Straßenverkehr
      zur Seite mindestens zu berücksichtigen ist?`,
    answer: `0,50.`
  },
  {
    question: `84)	Wie groß ist der Beschleunigungsbeiwert, der bei der Ladungssicherung im Straßenverkehr
      nach hinten mindestens zu berücksichtigen ist?`,
    answer: `0,50.`
  },
  {
    question: `85)	Welche Kräfte können während der Fahrt auf die Ladung nach vorne wirken?`,
    answer: `Eine zusätzliche Gewichtskraft beim Bergabfahren und die Beschleunigungskraft beim Bremsen.`
  },
  {
    question: `86)	Welche Kräfte können während der Fahrt auf die Ladung seitlich wirken?`,
    answer: `Die Fliehkraft beim Kurvenfahren und schnellen Ausweichmanövern.`
  },
  {
    question: `87)	Welche Kräfte können während der Fahrt auf die Ladung nach hinten wirken?`,
    answer: `Eine zusätzliche Kraft beim Bergauffahren und die Beschleunigungskraft beim Beschleunigen.`
  },
  {
    question: `88)	Sie sollen die Koffer einer Reisegruppe in Ihrem Omnibus verstauen. Was beachten Sie dabei?`,
    answer: `Ich verstaue die Koffer möglichst lückenlos im Gepäckraum des Omnibusses und achte
        darauf, dass die Koffer möglichst formschlüssig zur Stirnwand, den Teilungsstreben und den
        Seitenwänden des Gepäckraumes verladen sind.`
  },
  {
    question: `89)	Sie bemerken vor der Abfahrt, dass Fahrgäste im Mittelgang Ihres Omnibusses
      Getränkekisten aufgestellt haben, um während der Fahrt Getränke zu konsumieren. Wie
      sollten Sie sich verhalten?`,
    answer: `Ich sorge dafür, dass die Getränkekisten im Gepäckraum des Omnibusses gesichert verladen werden. Für den        Transport der Getränkegebinde biete ich die Benutzung der Kühlboxen im Fahrgastraum an.`
  },
  {
    question: `90)	Warum dürfen während der Fahrt im Mittelgang Ihres Omnibusses keine Gegenstände wie
      Getränkekisten, Koffer und dergleichen stehen?`,
    answer: `Weil der Mittelgang im Gefahrenfall als Fluchtweg dient.`
  },
  {
    question: `91)	Die Gepäckablagen über den Sitzen im Fahrgastraum Ihres Omnibusses weisen
      Verschlussklappen auf. Was beachten Sie dabei?`,
    answer: `Ich überzeuge mich vor der Abfahrt, dass alle Verschlussklappen geschlossen und verriegelt Sind.`
  },
  {
    question: `92)	Welche Daten werden auf der Fahrerkarte gespeichert?`,
    answer: `Daten zu den gefahrenen Fahrzeugen sowie Fahreraktivitäten.`
  },
  {
    question: `93)	In welchen Fällen müssen Sie einen Ausdruck aus dem digitalen Kontrollgerät anfertigen?`,
    answer: `Auf Verlangen eines Kontrollorgans sowie bei einem Defekt der Fahrerkarte.`
  },
  {
    question: `94)	In welchem Zeitraum müssen die Daten von der Fahrerkarte ausgelesen und im
      Unternehmen gespeichert werden?`,
    answer: `Auf jeden Fall spätestens nach 28 Kalendertagen.`
  },
  {
    question: `95)	In welcher Weise können Sie nach einem Verkehrsunfall die im digitalen Kontrollgerät
      gesicherten Daten zur Beweissicherung heranziehen?`,
    answer: `Durch Download aus dem Massenspeicher innerhalb der nächsten 24 Lenkstunden.`
  },
  {
    question: `96)	Wie lang werden die detaillierten Geschwindigkeitsdaten im Massenspeicher des
      Kontrollgerätes gespeichert?`,
    answer: `24 Lenkstunden.`
  },
  {
    question: `97)	Sie nehmen ein Fahrzeug mit digitalem Kontrollgerät in Betrieb. Dabei wird die Uhrzeit mit
      dem Zusatz "UTC" angezeigt. Was bedeutet "UTC"?`,
    answer: `Es wird in einer ortsunabhängigen Zeitzone ("Weltzeit") aufgezeichnet.`
  },
  {
    question: `98)	Welche Ortszeit in Österreich entspricht an einem Dezembertag 9:30 Uhr UTC-Zeit?`,
    answer: `10:30 Uhr.`
  },
  {
    question: `99)	Wie lang ist eine Fahrerkarte ab dem Ausstellungszeitpunkt gültig?`,
    answer: `5 Jahre.`
  },
  {
    question: `100)	Sie wollen ein Fahrzeug mit digitalem Kontrollgerät lenken. Wie sollten Sie sich verhalten,
       wenn Ihre Fahrerkarte defekt geworden oder verloren gegangen ist?`,
    answer: `Ich fertige vor Fahrtbeginn und nach Fahrtende einen Tagesausdruck an. Der Tagesausdruck ist mit meinem            Namen und der Nummer des Führerscheins oder Nummer der Fahrerkarte sowie meiner Unterschrift zu versehen. Ich beantrage innerhalb von 7 Kalendertagen eine Ersatzkarte.`
  },
  {
    question: `101)	Sie wollen ein Fahrzeug mit digitalem Kontrollgerät lenken. Ihre Fahrerkarte ist defekt
      geworden oder verloren gegangen. Wie lang dürfen Sie ohne Karte fahren?`,
    answer: `Höchstens 15 Tage.`
  },
  {
    question: `102)	Sie sind im "Mehrfahrerbetrieb" als Beifahrer im Fahrzeug unterwegs. In welchem
       Kartenschacht des digitalen Kontrollgerätes muss sich Ihre Fahrerkarte befinden?`,
    answer: `Im Kartenschacht 2.`
  },
  {
    question: `103)	Was bedeutet der Begriff "Tägliche Ruhezeit"?`,
    answer: `Das ist der tägliche Zeitraum, in dem eine Lenkerin oder ein Lenker frei über ihre bzw. seine Zeit verfügen kann und der eine „regelmäßige tägliche Ruhezeit“ oder eine „reduzierte tägliche Ruhezeit“ umfasst.`
  },
  {
    question: `104)	Die österreichische Ortszeit beträgt 11:00 Uhr. Welche UTC-Zeit entspricht an einem
       Sommertag der österreichischen Ortszeit?`,
    answer: `9:00 Uhr.`
  },
  {
    question: `105)	Sie lenken ein Fahrzeug mit digitalem Kontrollgerät. Welche Einstellungen müssen Sie
        vornehmen, wenn Sie einen Grenzübertritt durchführen?`,
    answer: `Ich muss das Ländersymbol umstellen, wenn das Kontrollgerät diese Umstellung nicht
           automatisch vornimmt.`
  },
  {
    question: `106)	Welche Tätigkeiten fallen unter den Begriff "Bereitschaftszeit"?`,
    answer: `Wenn ich für das Lenken eines Fahrzeuges zur Verfügung stehe, dieses aber nicht selbst
           lenke und auch sonst keine Arbeiten verrichte.`
  },
  {
    question: `107)	Was müssen Sie tun, wenn Sie nach einer täglichen Ruhezeit Ihre Fahrerkarte wieder in das
        digitale Kontrollgerät stecken?`,
    answer: `Ich trage die Aktivitäten seit der letzten Entnahme der Karte im Gerät nach.`
  },
  {
    question: `108)	Welche Tätigkeiten fallen unter den Begriff "Andere Arbeiten"?`,
    answer: `Wenn ich das Fahrzeug be- oder entlade.`
  },
  {
    question: `109)	Sie machen im Mehrfahrerbetrieb einen Fahrerwechsel. Wie müssen Sie sich in Bezug auf das      digitale Kontrollgerät verhalten?`,
    answer: `Die Fahrerkarte des jeweiligen Lenkers muss im Kartenschacht 1 stecken, jene des Beifahrers im Kartenschacht 2.`
  },
  {
    question: `110)	Wie verhalten Sie sich im kombinierten Verkehr, wenn Sie Teile der Fahrt auf einer Fähre
        oder auf einem Zug verbringen?`,
    answer: `Ich stelle das digitale Kontrollgerät auf die Menüeinstellung "Zug-Fähre".`
  },
  {
    question: `111)	Was bedeutet der Begriff "Wochenlenkzeit"?`,
    answer: `Das ist die Gesamtlenkzeit innerhalb einer Woche. Die Woche ist der Zeitraum von Montag 00:00 Uhr bis    Sonntag 24:00 Uhr.`
  },
  {
    question: `112)	Was müssen Sie am digitalen Kontrollgerät beachten, wenn Sie nach 4 Stunden und 30
        Minuten Lenkzeit eine Pause einlegen?`,
    answer: `Ich muss gleich nach dem Abstellen des Fahrzeuges meine Aktivität auf das Symbol"Ruhezeit" umstellen.`
  },
  {
    question: `113)	Sie lenken ein Fahrzeug auf einer Autobahn. Sie planen, in den nächsten 15 Minuten einen
        Rastplatz anzufahren, weil eine Lenkpause fällig ist. Plötzlich müssen Sie wegen eines
         Verkehrsunfalles anhalten. Wie gehen Sie weiter vor?`,
    answer: `Ich warte ab, bis die Weiterfahrt möglich ist, und halte die Lenkpause danach auf dem nächsten Rastplatz. Ich    muss anschließend einen manuellen Ausdruck anfertigen und den Grund dieser Lenkzeitüberschreitung dokumentieren. Ich nutze damit die sogenannte"Halteplatzregel".`
  },
  {
    question: `114)	Sie wollen ein Fahrzeug mit digitalem Kontrollgerät lenken. Ihre Fahrerkarte ist defekt
        geworden oder verloren gegangen. Wie lang dürfen Sie ohne Karte fahren?`,
    answer: `Höchstens 15 Tage.`
  },
  {
    question: `115)	Sie benutzen mit Ihrem Fahrzeug ein Fährschiff oder die "Rollende Landstraße". Unter
       welchen Bedingungen gilt die dort verbrachte Zeit als tägliche Ruhezeit?`,
    answer: `Wenn auf dem Fährschiff eine Schlafkabine oder im Waggon ein Liegeplatz zur Verfügung Steht.`
  },
  {
    question: `116)	In welchem Staat muss ein EU-Bürger seine Fahrerkarte beantragen?`,
    answer: `In dem EU-Mitgliedstaat, in dem er seinen Wohnsitz hat.`
  },
  {
    question: `117)	Sie arbeiten für verschiedene Arbeitgeber. Wie viele gültige Fahrerkarten dürfen Sie besitzen?`,
    answer: `Höchstens eine.`
  },
  {
    question: `118)	Wo ist in Österreich der Antrag für die Fahrerkarte zu stellen?`,
    answer: `Bei den Autofahrerclubs ARBÖ oder ÖAMTC.`
  },
  {
    question: `119)	Sie lenken ein Fahrzeug 4,5 Stunden lang. Kann die notwendige Lenkpause von 45 Minuten
       auch geteilt werden?`,
    answer: `Ja. Teil 1 muss mindestens 15 Minuten, Teil 2 mindestens 30 Minuten lang dauern.`
  },
  {
    question: `120)	Ihre Fahrerkarte ist durch Zeitablauf ungültig geworden. Wie lang danach müssen Sie diese
        Fahrerkarte noch mitführen?`,
    answer: `Mindestens 28 Tage nach Ablauf der Gültigkeit.`
  },
  {
    question: `121)	Im Zuge einer Verkehrskontrolle wird aufgrund der Aufzeichnung am Schaublatt des
        analogen Kontrollgerätes festgestellt, dass Sie mit 95 km/h unterwegs waren. Kann das zu
        einer Bestrafung führen?`,
    answer: `Ja, wenn die Geschwindigkeitsüberschreitung weniger als 2 Stunden vor der Kontrolle erfolgt ist.`
  },
  {
    question: `122)	Nach welcher durchgehenden Lenkzeit müssen Sie die Fahrt spätestens unterbrechen?`,
    answer: `Nach 4,5 Stunden.`
  },
  {
    question: `123)	Unter welchen Voraussetzungen dürfen Sie eine tägliche oder reduzierte wöchentliche
        Ruhezeit im Fahrzeug verbringen?`,
    answer: `Wenn das Fahrzeug still steht.`
  },
  {
    question: `124)	Ihr Fahrzeug hat ein analoges EG-Kontrollgerät. Darf das EG-Kontrollgerät während der
        Einsatzzeit des Fahrzeuges geöffnet werden?`,
    answer: `Ja, bei einem Fahrerwechsel.`
  },
  {
    question: `125)	Was bedeutet der Begriff "Wöchentliche Ruhezeit"?`,
    answer: `Eine einmal wöchentlich zu haltende Ruhezeit, die grundsätzlich 45 Stunden dauern muss.`
  },
  {
    question: `126)	Wer ist für die korrekte Bedienung des digitalen Kontrollgerätes verantwortlich?`,
    answer: `Der Fahrer.`
  },
  {
    question: `127)	Wann muss grundsätzlich eine wöchentliche Ruhezeit gehalten werden?`,
    answer: `Spätestens am Ende von sechs 24-Stunden-Zeiträumen nach Ende der letzten wöchentlichen Ruhezeit.`
  },
  {
    question: `128)	Sie lenken ein Fahrzeug mit digitalem Kontrollgerät. Am Display des Kontrollgerätes blinkt
        die Meldung "Geschwindigkeit zu hoch". Wie sollten Sie sich verhalten?`,
    answer: `Ich fahre langsamer und quittiere die Meldung durch Drücken der Taste "OK" am Kontrollgerät.`
  },
  {
    question: `129)	Wie lang darf die Lenkzeit zwischen zwei Ruhezeiten höchstens dauern?`,
    answer: `Im Normalfall insgesamt 9 Stunden, zweimal in der Kalenderwoche insgesamt 10 Stunden.`
  },
  {
    question: `130)	Wie oft darf die tägliche Lenkzeit während einer Woche auf 10 Stunden ausgedehnt werden?`,
    answer: `2 mal.`
  },
  {
    question: `131)	Sie lenken ein Fahrzeug, das mit einem "intelligenten" digitalen Kontrollgerät ausgerüstet ist.                 Wie können Sie im Regelfall den Nachweis über die Einhaltung der wöchentlichen Ruhezeit   erbringen?`,
    answer: `Durch Nachtragen beim ersten Stecken der Fahrerkarte nach der Ruhezeit.`
  },
  {
    question: `132)	Wie viele Stunden darf die wöchentliche Lenkzeit grundsätzlich höchstens dauern?`,
    answer: `56 Stunden.`
  },
  {
    question: `133)	Was bedeutet der Begriff "Lenkpause"?`,
    answer: `Die Zeit, in der keine Lenk- oder andere Arbeitstätigkeit ausgeführt werden darf.`
  },
  {
    question: `134)	Nach wie vielen Stunden ununterbrochener Lenkzeit muss spätestens eine Lenkpause
        eingelegt werden?`,
    answer: `4,5 Stunden.`
  },
  {
    question: `135)	Sie lenken einen LKW/BUS Fahrzeug ununterbrochen 4,5 Stunden lang. Wie lang muss Ihre
        Lenkpause dann mindestens dauern?`,
    answer: `45 Minuten.`
  },
  {
    question: `136)	Sie dehnen die tägliche Lenkzeit auf 10 Stunden aus. Wie viele Lenkpausen müssen Sie dann
        halten?`,
    answer: `Mindestens zwei.`
  },
  {
    question: `137)	Unter welcher Voraussetzung dürfen Sie mit Fahrzeugen mit digitalem Kontrollgerät ohne
       Fahrerkarte fahren?`,
    answer: `Wenn ich meine Fahrerkarte verloren habe.`
  },
  {
    question: `138)	Welche Daten werden im Massenspeicher des digitalen Kontrollgerätes nicht aufgezeichnet?`,
    answer: `Kraftstoffverbrauch.`
  },
  {
    question: `139)	Wie lang werden detaillierte Geschwindigkeitsdaten im Massenspeicher des Kontrollgerätes
       gespeichert?`,
    answer: `24 Lenkstunden.`
  },
  {
    question: `140)	Wie lang muss eine regelmäßige wöchentliche Ruhezeit mindestens dauern?`,
    answer: `45 Stunden.`
  },
  {
    question: `141)	Wie lang muss eine verkürzte (reduzierte) wöchentliche Ruhezeit mindestens dauern?`,
    answer: `24 Stunden.`
  },
  {
    question: `142)	In welchem Fall müssen Sie an einem Tag eine dritte Lenkpause machen?`,
    answer: `Bei Vorliegen außergewöhnlicher Umstände nach der Halteplatzregel, wenn ich die maximale tägliche Lenkzeit  zum Erreichen meines Wohnstandortes oder meines Firmenstandortes um zwei weitere Stunden verlängere, um dort eine regelmäßige wöchentliche Ruhezeit zu halten.`
  },
  {
    question: `143)	Sie müssen wegen der Halteplatzregel an einem Tag eine dritte Lenkpause halten. Wie lang
       muss diese Lenkpause mindestens dauern?`,
    answer: `30 Minuten.`
  },
  {
    question: `144)	Sie sind unmittelbar vor dem Beginn einer reduzierten wöchentlichen Ruhezeit. Unter
        welchen Umständen dürfen Sie dann die täglich zulässige Lenkzeit von 10 Stunden um eine
        Stunde ausdehnen?`,
    answer: `Wenn unvorhersehbare Umstände eintreten (z. B. widrige Witterungsbedingungen,
           plötzlich auftretende Verkehrsstaus).`
  },
  {
    question: `145)	Sie sind unmittelbar vor dem Beginn einer regelmäßigen wöchentlichen Ruhezeit. Unter
       welchen Umständen dürfen Sie dann die täglich zulässige Lenkzeit von 10 Stunden um zwei
       Stunden ausdehnen?`,
    answer: `Wenn unvorhersehbare Umstände eintreten (z. B. widrige Witterungsbedingungen,
         plötzlich auftretende Verkehrsstaus).`
  },
  {
    question: `146)	Sie haben die täglich zulässige Lenkzeit von 10 Stunden wegen eines unvorhersehbaren
        Ereignisses verlängert. Was müssen Sie dann beim Erreichen ihres Fahrtziels beachten?`,
    answer: `Ich muss einen Ausdruck aus dem Kontrollgerät erstellen. Auf diesem Ausdruck bzw. dem
          Schaublatt muss ich den Grund für die Überschreitung der täglich zulässigen Lenkzeit vermerken.`
  },
  {
    question: `147)	Sie sind zu Ihrem Wohnort oder zur Firmenniederlassung im Heimatland unterwegs. Wegen
       eines unvorhersehbaren Ereignisses haben Sie die zulässige tägliche Lenkzeit überschritten.
       Wie lang darf in diesem Fall die wöchentliche Lenkzeit höchstens dauern?`,
    answer: `58 Stunden.`
  },
  {
    question: `148)	Sie haben die täglich zulässige Lenkzeit von 10 Stunden wegen eines unvorhersehbaren
       Ereignisses verlängert. Müssen Sie diese Verlängerung danach wieder ausgleichen?`,
    answer: `Ja, durch eine gleichwertige Ruhezeit. Diese muss spätestens zum Ende der dritten Woche,
        die auf die Woche folgt, in der die Verlängerung erfolgte, genommen werden.`
  },
  {
    question: `149)	Wann muss eine regelmäßige wöchentliche Ruhezeit begonnen werden?`,
    answer: `Spätestens am Ende von sechs 24-Stunden Zeiträumen nach der letzten wöchentlichen Ruhezeit.`
  },
  {
    question: `150)	Sie haben eine verkürzte (reduzierte) wöchentliche Ruhezeit genommen. Müssen Sie diese
        danach ausgleichen?`,
    answer: `Ja. Der Ausgleich muss spätestens am Ende der dritten Woche, die auf die Verkürzung folgt,
          erfolgen. Dieser Ausgleich muss an eine Ruhezeit mit zumindest 9 Stunden angehängt werden.`
  },
  {
    question: `151)	Darf eine wöchentliche Ruhezeit unterbrochen werden?`,
    answer: `Ja, bis zu zwei Mal, wenn diese Unterbrechungen insgesamt nicht länger als eine Stunde
          dauern und im Zuge einer Eisenbahn- oder Fährfahrt erfolgen.`
  },
  {
    question: `152)	Sie halten eine regelmäßige wöchentliche Ruhezeit. Dürfen Sie diese in der Fahrerkabine
       verbringen?`,
    answer: `Nein.`
  },
  {
    question: `153)	Sie halten eine regelmäßige wöchentliche Ruhezeit. Wo dürfen Sie diese verbringen?`,
    answer: `In einer geeigneten Unterkunft. Deren Kosten trägt der Arbeitgeber.`
  },
  {
    question: `154)	Welche Standortdaten zeichnet das "intelligente" Kontrollgerät automatisch auf?`,
    answer: `Die Geodaten zu Beginn und am Ende der täglichen Arbeitszeit bzw. nach jeweils drei Stunden Lenkzeit (diese Aufzeichnungen ersetzen jedoch nicht die erforderliche Ländereingabe).`
  },
  {
    question: `155)	Welche Vorschriften gelten für die Rückkehr zum Wohnort des Fahrers oder zum
        Firmenstandort?`,
    answer: `Fahrer müssen spätestens nach vier Wochen zum Wohnort oder Firmenstandort für eine
           regelmäßige Ruhezeit von mindestens 45 Stunden zurückkehren.`
  },
  {
    question: `156)	Sie fahren nur in Österreich. Welche Vorschriften gelten dann für die wöchentlichen
        Ruhezeiten?`,
    answer: `Es dürfen entweder zwei regelmäßige wöchentliche Ruhezeiten oder eine reduzierte und
          danach eine regelmäßige wöchentliche Ruhezeit aufeinander folgen.`
  },
  {
    question: `157)	Sie fahren im grenzüberschreitenden Verkehr. Welche Vorschriften gelten dann für die
         wöchentlichen Ruhezeiten?`,
    answer: `In vier aufeinanderfolgenden Wochen dürfen zwei reduzierte (verkürzte) wöchentliche Ruhezeiten aufeinander  folgen, sofern diese nicht im Staat, in dem der Standort des Unternehmens oder der Wohnsitz des Lenkers liegt, beginnen. Die beiden anderen Ruhezeiten müssen regelmäßige Ruhezeiten sein.`
  },
  {
    question: `158)	Sie fahren im grenzüberschreitenden Verkehr und haben aufeinanderfolgend zwei reduzierte
        (verkürzte) wöchentliche Ruhezeiten gehalten. Wie muss in diesem Fall der Ausgleich dieser
        Ruhezeiten erfolgen?`,
    answer: `Der notwendige Zeitausgleich muss gemeinsam mit der nächsten regelmäßigen wöchentlichen Ruhezeit im Staat, in dem der Standort des Unternehmens oder der Wohnsitz des Lenkers liegt, erfolgen.`
  },
  {
    question: `159)	Wann liegt im Bezug auf die wöchentliche Ruhezeit grenzüberschreitender Verkehr vor?`,
    answer: `Der Fahrer beginnt zwei aufeinander folgende reduzierte wöchentliche Ruhezeiten
         außerhalb des Staates, in dem der Standort des Unternehmens oder sein Wohnsitzes liegt.`
  },
  {
    question: `160)	Sie haben zwei aufeinander folgende reduzierte (verkürzte) wöchentliche Ruhezeiten im
        Ausland verbracht. Was gilt dann für den notwendigen Zeitausgleich?`,
    answer: `Der Fahrer muss vor dem Beginn des Zeitausgleichs und der anschließenden regelmäßigen wöchentlichen    Ruhezeit zum Standort des Unternehmens oder an seinen Wohnort zurückkehren.`
  },
  {
    question: `161)	Sie sind im Zweifahrerbetrieb unterwegs. Was gilt für die 45-minütige Lenkpause?`,
    answer: `Der Beifahrer darf die Lenkpause auch im fahrenden Fahrzeug verbringen, wenn er den
           Fahrer in dieser Zeit nicht unterstützt.`
  },
  {
    question: `162)	Wie lang muss die regelmäßige tägliche Ruhezeit mindestens dauern?`,
    answer: `11 Stunden innerhalb von 24 Stunden bei Einfahrerbesetzung.`
  },
  {
    question: `163)	Wie lang muss die reduzierte tägliche Ruhezeit mindestens dauern?`,
    answer: `9 Stunden.`
  },
  {
    question: `164)	Wie oft pro Woche darf die tägliche Ruhezeit auf 9 Stunden verkürzt werden?`,
    answer: `Drei mal.`
  },
  {
    question: `165)	Wie darf die tägliche Ruhezeit grundsätzlich geteilt werden?`,
    answer: `Auf 3 und 9 Stunden.`
  },
  {
    question: `166)	Sie lenken einen Omnibus und führen im Gelegenheitsverkehr eine Fahrt mit älteren
        Fahrgästen durch. Müssen Sie dafür sorgen, dass die Fahrgäste Sicherheitsgurte benutzen?`,
    answer: `Nein, das liegt in der eigenen Verantwortung der einzelnen Fahrgäste.`
  },
  {
    question: `167)	Die GO-Box Ihres Fahrzeuges hat beim Durchfahren eines Mautportals vier Signaltöne
       abgegeben. Wie sollten Sie sich verhalten?`,
    answer: `Ich suche innerhalb von 5 Stunden bzw. einer Fahrtstrecke von 100 km eine Vertriebsstelle
         auf, um die Maut nachzuzahlen.`
  },
  {
    question: `168)	Was bedeutet es, wenn beim Durchfahren eines Mautportales kein Signalton der GO-Box
       erfolgt?`,
    answer: `Die Maut wurde nicht ordnungsgemäß entrichtet.`
  },
  {
    question: `169)	Die GO-Box Ihres Fahrzeuges hat beim Durchfahren eines Mautportals keinen Signalton
       abgegeben. Wie sollten Sie sich verhalten?`,
    answer: `Ich suche innerhalb von 5 Stunden bzw. einer Fahrtstrecke von 100 km eine Vertriebsstelle
         auf, um die Maut nachzuzahlen.`
  },
  {
    question: `170)	Sie lenken einen Omnibus der Fahrzeugklasse M2 mit 2 Achsen und ziehen einen einachsigen      Anhänger der Fahrzeugklasse O1. Müssen Sie die Einstellung der Achsenzahl bei der GO-Box gegenüber einer Fahrt mit dem Bus ohne Anhänger verändern?`,
    answer: `Nein.`
  },
  {
    question: `171)	Am Beginn des Fahrdienstes überprüfen Sie Ihren Omnibus. Dabei stellen Sie fest, dass die
        Frontscheibe auf Höhe des Reiseleiterplatzes einen etwa 50 cm langen Riss aufweist. Wie
        sollten Sie sich verhalten?`,
    answer: `Ich melde diese Beschädigung unverzüglich dem Dienstgeber und darf mit diesem Omnibus
          keine Fahrgäste befördern.`
  },
  {
    question: `172)	Sie lenken im Gelegenheitsverkehr einen Omnibus mit 48 Sitzplätzen und holen eine
        Reisegruppe ab. Dabei stellt sich heraus, dass die Reisegruppe 54 Personen umfasst. Wie
        sollten Sie sich verhalten?`,
    answer: `Ich darf nicht mehr als 48 Personen im Omnibus befördern. Daher verständige ich
          unverzüglich die Betriebsleitung, um das Problem zu lösen.`
  },
  {
    question: `173)	Sie lenken einen Omnibus und befördern Kinder oder Jugendliche im Alter zwischen 3 und 14       Jahren. Sind Sie dafür verantwortlich, dass die Kinder oder Jugendlichen die Sicherheitsgurte benutzen?`,
    answer: `Nein, wenn im Gelegenheitsverkehr gefahren wird und eine erwachsene Begleitperson im
         Omnibus mitfährt oder wenn im Linienverkehr gefahren wird.`
  },
  {
    question: `174)	Wie müssen Sie Ihren Omnibus kennzeichnen, wenn Sie einen Schülertransport durchführen?`,
    answer: `Durch eine gelbrote quadratische Tafel mit dem Kindersymbol an der Vorder- und Rückseite des Busses.`
  },
  {
    question: `175)	Was haben Sie zu beachten, wenn Sie an der Haltestelle Kinder aus Ihrem Schulbus
       aussteigen lassen?`,
    answer: `Ich muss die Alarmblinkanlage und zusätzliche Warnleuchten, welche in der Heckscheibe
         oder am Dach des Busses montiert sind, einschalten.`
  },
  {
    question: `176)	Sie sollen mit einem Omnibus einen Schülertransport durchführen. Welche
        Lenkberechtigungen bzw. Eintragungen im Führerschein und behördliche Ausweise
        berechtigen Sie dazu?`,
    answer: `Eine Lenkberechtigung der Klasse D oder D1 alleine reicht dazu immer aus. Es sind keine
          weiteren Eintragungen im Führerschein notwendig.`
  },
  {
    question: `177)	Wie stellen Sie fest, ob die GO-Box im Fahrzeug funktionstüchtig ist?`,
    answer: `Durch eine Statusabfrage bei der GO-Box vor und nach der Fahrt.`
  },
  {
    question: `178)	Wo soll die GO-Box auf der Windschutzscheibe des Fahrzeuges montiert werden, um eine
        korrekte Mautentrichtung zu gewährleisten?`,
    answer: `An der Innenseite der Windschutzscheibe zwischen Lenkradmitte und Fahrzeugmitte,
         mindestens 10 cm oberhalb des Scheibenwischers in Ruhestellung und mindestens 30 cm
          unterhalb der Windschutzscheibenoberkante. Genaue Informationen zur
          ordnungsgemäßen Anbringung der GO-Box sind in der ASFINAG-Mautordnung zu finden.`
  },
  {
    question: `179)	Was ist gesetzlich zur ordnungsgemäßen Entrichtung der Omnibus-Maut vorgesehen?`,
    answer: `Es muss im Fahrzeug eine GO-Box oder ein gleichwertiges Gerät installiert sein.`
  },
  {
    question: `180)	Sie müssen rückwärts aus einem Firmengelände ausfahren und haben keine ausreichende
        Sicht auf den herannahenden Verkehr. Wie sollten Sie sich verhalten?`,
    answer: `Ich lasse mich von einer geeigneten Person einweisen.`
  },
  {
    question: `181)	Während der Fahrt läutet Ihr Handy. Das Telefon ist nicht mit einer Freisprecheinrichtung
        gekoppelt. Wie verhalten Sie sich?`,
    answer: `Ich lasse das Handy läuten und rufe nach Beendigung der Fahrt zurück.`
  },
  {
    question: `182)	Welches Schuhwerk ist beim Lenken eines Fahrzeugs zu benutzen?`,
    answer: `Fußumschließendes Schuhwerk (z.B. Sandalen mit Fersenriemen, Stiefel, Halbschuhe).`
  },
  {
    question: `183)	Sie beschädigen beim Ausparken ein abgestelltes Fahrzeug. Der Lenker des anderen
        Fahrzeuges ist nicht erreichbar. Müssen Sie diesen Unfall der nächsten Polizeidienststelle
        melden?`,
    answer: `Ja, dieser Unfall ist zu melden.`
  },
  {
    question: `184)	Welche sind die häufigsten Unfallursachen mit LKW bzw. OMNIBUSSEN im Straßenverkehr?`,
    answer: `Nicht angepasste Geschwindigkeit sowie zu geringer Sicherheitsabstand.`
  },
  {
    question: `185)	Welche sind die häufigsten Unfallursachen mit Beteiligung von Nutzfahrzeugen im
        Straßenverkehr?`,
    answer: `Auffahrunfälle, Abkommen von der Fahrbahn, Zusammenstöße mit anderen Fahrzeugen.`
  },
  {
    question: `186)	Werden Fahrer und Unternehmer zur Verantwortung gezogen, wenn bei der Einreise nach
       Großbritannien in ihrem Fahrzeug illegale Einwanderer entdeckt werden?`,
    answer: `Ja, es ist in jedem Fall mit Strafverfahren vor den Behörden oder Gerichten zu rechnen.`
  },
  {
    question: `187)	Was sollte bei der Ausreisekontrolle vom Festland (z. B. in Frankreich) in Richtung
        Großbritannien vom Fahrer immer beantragt werden, um einer Schleusung illegaler
         Einwanderer vorzubeugen?`,
    answer: `Eine behördliche Kontrolle des Laderaums mit Hilfe von Atemluft-Messgeräten.`
  },
  {
    question: `188)	Ein Autostopper bittet Sie, mitgenommen zu werden. Wie sollten Sie sich verhalten, um einer
       Schleusung illegaler Einwanderer vorzubeugen?`,
    answer: `Ich überzeuge mich, ob er für den Aufenthalt in Österreich ein gültiges Ausweisdokument
          mit sich führt und nehme ihn im Zweifelsfall nicht mit.`
  },
  {
    question: `189)	Ein Autostopper bittet Sie, mitgenommen zu werden. Welche Dokumente sollten Sie sich von
        ihm zeigen lassen, damit Sie der Schleusung illegaler Einwanderer vorbeugen?`,
    answer: `Einen Reisepass oder Personalausweis eines EU- oder EWR-Staates oder eine
          österreichische Aufenthaltskarte oder einen österreichischen Identitätsausweis.`
  },
  {
    question: `190)	Sie führen bei einer Tankstelle einen Tankvorgang durch. Wie sollten Sie sich dabei
        verhalten, um der Schleusung illegaler Einwanderer vorzubeugen?`,
    answer: `Ich schließe die Fahrzeugtüren bzw. Behälter und Ausrüstungskisten ab und kontrolliere vor
          der Weiterfahrt, ob sich jemand in Hohlräumen des Fahrzeuges versteckt hat.`
  },
  {
    question: `191)	Wodurch können Sie die Funktionsfähigkeit Ihrer Stützmuskulatur (z.B. der
        Rückenmuskulatur) erhalten?`,
    answer: `Durch gezielte gymnastische Übungen.`
  },
  {
    question: `192)	Wie beladen Sie Ihr Fahrzeug möglichst ergonomisch bzw. gesundheitsschonend?`,
    answer: `Ich gehe beim Heben von Lasten in die Knie und halten den Rücken gerade und nutze
          möglichst Ladehilfen.`
  },
  {
    question: `193)	Wo treten die größten körperlichen Belastungen auf, wenn Sie Lasten falsch heben?`,
    answer: `Im Lendenwirbelbereich.`
  },
  {
    question: `194)	Wie hebt man eine Last richtig?`,
    answer: `Man geht nach unten in die Hocke mit aufrechtem Rücken und gebeugten Knien. Die Gewichte sollen nahe am     Körper gehalten werden. Die Last soll zügig und gleichmäßig angehoben werden.`
  },
  {
    question: `195)	Bei langen Fahrzeiten ohne Flüssigkeitszufuhr und mit starrer Beinhaltung besteht die
        Gefahr...
          eines Blutgerinnsels in den Beinvenen.

196)	Andauernde, laute Radiomusik beim Lenken eines Fahrzeuges...
         vermindert die Konzentrationsfähigkeit.

197)	Beim Lenken eines Fahrzeuges soll ich...
          meine Sitzhaltung und Sitzposition möglichst häufig verändern z.B. leicht nach vorn beugen, zurücklehnen.

198)	Bei durchgetretenem Brems- oder Kupplungspedal...
         sollen die Beine leicht angewinkelt sein.


199)	Wirbelsäulenerkrankungen und Rückenschmerzen...
          kommen bei Berufskraftfahrern häufig vor.


200)	Was führt zu verbessertem Schlafverhalten?`,
    answer: `Wenn ich vor dem Schlafengehen Entspannungstechniken anwende.`
  },
  {
    question: `201)	Wodurch kann die Widerstandsfähigkeit gegen Stress erhöht werden?`,
    answer: `Durch regelmäßiges Mentaltraining.`
  },
  {
    question: `202)	Welche Flüssigkeiten und in welchen Mengen sollten Sie täglich trinken?`,
    answer: `Wasser oder ungezuckerten Kräuter- oder Früchtetee (2 - 3 Liter).`
  },
  {
    question: `203)	Eine gute körperliche Kondition…
          steigert die geistige Leistungsfähigkeit und Konzentrationsfähigkeit beim Autofahren.


204)	Die Tageszeit beeinflusst die Leistungsfähigkeit eines Menschen. Wann ist die
        Leistungsfähigkeit normalerweise am geringsten?`,
    answer: `Zwischen 2 und 4 Uhr.`
  },
  {
    question: `205)	Wie kann vorzeitiger Ermüdung und herabgesetzter Aufmerksamkeit vorgebeugt werden?`,
    answer: `Durch günstige Ernährung (fettarm, keine Süßigkeiten) und ausreichende Trinkmenge.`
  },
  {
    question: `206)	Welche Auswirkungen auf die kraftfahrspezifische Leistungsfähigkeit hat der Konsum von
        Alkohol?`,
    answer: `Verlängerung der Reaktionszeit.`
  },
  {
    question: `207)	Trifft diese Aussage zu: "Beim Lenken eines Nutzfahrzeuges kann die Herzfrequenz auf 140-
        160 Schläge pro Minute steigen."
           Ja, diese Aussage ist richtig und darüber hinaus führt eine ständig zu hohe Herzfrequenz zu
           psychischem Stress und kann krank machen.


208)	Wie hoch ist die durchschnittliche Herzfrequenz eines Menschen im Ruhezustand?`,
    answer: `60 - 80 Schläge in der Minute.`
  },
  {
    question: `209)	Durch welches Essverhalten können Sie Ihre Leistungs- bzw. Konzentrationsfähigkeit positiv
        beeinflussen?`,
    answer: `Ich esse mehrere kleine, kohlehydratreiche, fettarme Mahlzeiten über den Tag verteilt.`
  },
  {
    question: `210)	Sie haben noch 300 km zu fahren und bemerken, dass Sie müde werden. Was sollten Sie tun?`,
    answer: `Ich lege eine ausreichende Erholungspause ein und betätige mich dabei körperlich.`
  },
  {
    question: `211)	Sie stehen beim Fahren im dichten Stadtverkehr unter Zeitdruck. Was sollten Sie tun?`,
    answer: `Ich mache mir bewusst, dass schnelleres Fahren im Stadtverkehr meist nichts bringt und fahre normal weiter.`
  },
  {
    question: `212)	Sie fahren mit einem Nutzfahrzeug und werden bei einer Fahrpause auf einen halben Liter
        Bier eingeladen. Wie verhalten Sie sich?`,
    answer: `Ich lehne strikt ab, weil schon kleine Alkoholmengen beeinträchtigen können.`
  },
  {
    question: `213)	Sie haben gestern ausgiebig gefeiert und viel Alkohol getrunken. Nach wenigen Stunden
        Schlaf sollten Sie heute als Berufskraftfahrer fahren. Welches Verhalten wäre richtig?`,
    answer: `Ich fahre nicht, weil noch lange Zeit die Gefahr einer Alkoholbeeinträchtigung in Form von Restalkohol besteht.`
  },
  {
    question: `214)	Welche Auswirkungen hat Stress auf den Körper?`,
    answer: `Blutdruck und Herzfrequenz steigen und es kann zur Verringerung der Informationsverarbeitung im Gehirn   kommen.`
  },
  {
    question: `215)	Sie wollen in Österreich die Polizei alarmieren. Welche Notrufnummer ist dafür zu wählen?`,
    answer: `133 oder 112.`
  },
  {
    question: `216)	Wie lautet die einheitliche europäische Notfallnummer?`,
    answer: `112.`
  },
  {
    question: `217)	Ein hinter Ihnen fahrender Mopedfahrer fährt auf Ihr Fahrzeug auf. Dadurch verletzt er sich,
        will aber keine Verständigung der Polizei. Wie sollten Sie sich verhalten?`,
    answer: `Ich leiste Erste Hilfe und verständige trotzdem sofort die Polizei.`
  },
  {
    question: `218)	Was kann zur besseren Verarbeitung eines Unfallerlebnisses beitragen?`,
    answer: `Wenn ich mir professionelle Hilfe hole, um das Unfallerlebnis aufzuarbeiten.`
  },
  {
    question: `219)	Hat Ihr Fahrverhalten Auswirkungen auf das Ansehen des Unternehmens, für das Sie fahren?`,
    answer: `Ja. Da Nutzfahrzeuge häufig Firmenaufschriften tragen, verbinden andere
         Verkehrsteilnehmer ein riskantes Fahrverhalten negativ mit meiner Firma.`
  },
  {
    question: `220)	Warum sollten Sie im Fahrdienst auf den Zustand Ihrer Kleidung achten?`,
    answer: `Saubere und unbeschädigte Kleidung bewirkt, dass Kunden ein positives Bild von mir und
          der Firma, für die ich fahre, gewinnen.`
  },
  {
    question: `221)	Warum sollten Sie im Fahrdienst ruhig und besonnen mit Kunden sprechen?`,
    answer: `Ruhiges sprechen bewirkt, dass Kunden ein positives Bild von mir und von der Firma, für die ich fahre, gewinnen.`
  },
  {
    question: `222)	Warum sollten Sie im Fahrdienst höflich mit Kunden umgehen?`,
    answer: `Höflicher Umgang bewirkt, dass Kunden ein positives Bild von mir und von der Firma, für
          die ich fahre, gewinnen.`
  },
  {
    question: `223)	Hat der technische Zustand ihres Fahrzeuges Auswirkungen auf das Ansehen des
        Unternehmens, für das Sie fahren?`,
    answer: `Ja. Da Nutzfahrzeuge häufig Firmenaufschriften tragen, verbinden Kunden einen schlechten
         technischen Zustand meines Fahrzeuges negativ mit meiner Firma.`
  },
  {
    question: `224)	Hat die Sauberkeit ihres Fahrzeuges Auswirkungen auf das Ansehen des Unternehmens, für
       das Sie fahren?`,
    answer: `Ja. Da Nutzfahrzeuge häufig Firmenaufschriften tragen, verbinden Kunden ein unsauberes
         Fahrzeug negativ mit meiner Firma.`
  },
  {
    question: `225)	Welche Funktionen übernimmt ein Reiseleiter bei einer Busfahrt?`,
    answer: `Er informiert die Reisegäste über den Ablauf der Reise und über die täglichen Reiseziele.`
  },
  {
    question: `226)	Sie befördern mit einem Omnibus eine Gruppe von Personen im Gelegenheitsverkehr von
        Wien nach Salzburg. Welche Dokumente müssen Sie als Lenker dabei mitführen?`,
    answer: `Die Zulassungsbescheinigung des Omnibusses.`
  },
  {
    question: `227)	Der Fahrerqualifizierungsnachweis verliert seine Gültigkeit, wenn...
          innerhalb von 5 Jahren keine Weiterbildung erfolgt.

228)	Wie lang ist ein Fahrerqualifizierungsnachweis gültig?`,
    answer: `5 Jahre.`
  },
  {
    question: `229)	Wie ist die Dauer der Weiterbildung für die Verlängerung des
         Fahrerqualifizierungsnachweises geregelt?`,
    answer: `Es müssen mindestens 35 Stunden innerhalb von 5 Jahren nachgewiesen werden.`
  },
  {
    question: `230)	Wo kann in Österreich eine rechtsgültige Weiterbildung für die Verlängerung des
        Fahrerqualifizierungsnachweises absolviert werden?`,
    answer: `Bei einer ermächtigten Ausbildungsstätte.`
  },
  {
    question: `231)	Sie lenken einen Omnibus im Linienverkehr. Was beachten Sie, wenn Sie im Ortsgebiet  von    einer Haltestelle abfahren wollen?`,
    answer: `Ich überzeuge mich durch einen Blick in den Rückspiegel, dass ich ohne Gefährdung nachkommender  Verkehrsteilnehmer abfahren kann.`
  },
];

export default questionsAndAnswers;
