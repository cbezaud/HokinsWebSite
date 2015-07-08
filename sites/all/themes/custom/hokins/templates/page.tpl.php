<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div id="page">

  <header class="header" id="header" role="banner">
    <?php print render($page['header']); ?>
  </header>

    <!--[if lt IE 9]>
  <p>
    Ce site a été conçu avec amour, en utilisant des technologies modernes qui régissent le web d'aujourd'hui.<br>
    Afin de profiter d'une expérience optimale, nous vous conseillons de mettre à jour votre navigateur ! VOUS ne le regretterez pas :-)
  </p>
  <![endif]-->


  <!-- Accessibilité : liens d'évitements / accès rapide -->
  <nav class="quick-access">
    <ul class="list-inline">
      <li><a href="#nav-main">Accès au menu de navigation</a></li>
      <li><a href="#content-main">Accès au contenu de la page</a></li>
    </ul>
  </nav>

  <div class="rwd-page" id="page-container">

    <?php print $messages; ?>
    <?php print render($tabs); ?>
    <?php print render($page['highlighted']); ?>
    <?php print render($page['help']); ?>
    <?php if ($action_links): ?>
      <ul class="action-links"><?php print render($action_links); ?></ul>
    <?php endif; ?>
    <?php //print render($page['content']); ?>
    <?php print $feed_icons; ?>


    <aside class="flap-panel" id="flap-nav">
      <nav class="nav-menu" id="nav-mobile">
        <ul class="list">
          <li><a href="#z-header" title="Retour en haut de la page">Accueil</a></li>
          <li><a href="#z-albums" title="Accéder à la section : EP">EP</a></li>
          <li><a href="#z-ecoute" title="Accéder à la section : En écoute">En écoute</a></li>
          <li><a href="#z-videos" title="Accéder à la section : Vidéos">Vidéos clip</a></li>
          <li><a href="#z-avis" title="Accéder à la section : Avis">Avis</a></li>
          <li><a href="#z-apropos" title="Accéder à la section : A propos">A propos</a></li>
          <li><a href="#z-photos" title="Accéder à la section : Photos">Photos</a></li>
          <li><a href="#z-dates" title="Accéder à la section : Dates">Dates</a></li>
          <li><a href="#z-contacts" title="Accéder à la section : Contacts">Contacts</a></li>
        </ul>
      </nav>
    </aside>

    <main class="page p-home" role="main">
      <div class="content-main" id="content-main">
        <aside class="nav-scroll">
          <nav class="nav-link" role="navigation">
            <ul class="list">
              <li><a href="#z-header" title="Retour haut de page"></a></li>
              <li><a href="#z-albums" title="Accéder à la section : EP"></a></li>
              <li><a href="#z-ecoute" title="Accéder à la section : En écoute"></a></li>
              <li><a href="#z-videos" title="Accéder à la section : Vidéos"></a></li>
              <li><a href="#z-avis" title="Accéder à la section : Avis"></a></li>
              <li><a href="#z-apropos" title="Accéder à la section : A propos"></a></li>
              <li><a href="#z-photos" title="Accéder à la section : Photos"></a></li>
              <li><a href="#z-dates" title="Accéder à la section : Dates"></a></li>
              <li><a href="#z-contacts" title="Accéder à la section : Contacts"></a></li>
            </ul>
          </nav>
        </aside>

        <div class="page-content">

          <header class="header-main zone" data-anchor="z-header">

            <div class="top-wrapper">
              <div class="zone-left">
                <a class="btn flap-btn" href="#nav-mobile" data-toggle="flap-nav" data-target="#flap-nav" data-context="#page-container">
                  <span class="fa fa-bars"></span>
                </a>
              </div>

              <div class="zone-center">
                <div class="logo-wrapper">
                    <span class="logo">
                      <img alt="Hokins" src="/<?php print path_to_theme(); ?>/tpl/img/bg/png/logos/logo.png">
                    </span>
                </div><!--/.logo-wrapper -->
              </div><!--/.zone-center -->
            </div><!--/.top-wrapper -->

            <div class="nav-wrapper">
              <nav class="nav-link" id="nav-main" role="navigation">
                <ul class="list-inline">
                  <li><a href="#z-albums" title="Accéder à la section : EP">EP</a></li>
                  <li><a href="#z-ecoute" title="Accéder à la section : En écoute">En écoute</a></li>
                  <li><a href="#z-videos" title="Accéder à la section : Vidéos">Vidéos clip</a></li>
                  <li><a href="#z-avis" title="Accéder à la section : Avis">Avis</a></li>
                  <li><a href="#z-apropos" title="Accéder à la section : A propos">A propos</a></li>
                  <li><a href="#z-photos" title="Accéder à la section : Photos">Photos</a></li>
                  <li><a href="#z-dates" title="Accéder à la section : Dates">Dates</a></li>
                  <li><a href="#z-contacts" title="Accéder à la section : Contacts">Contacts</a></li>
                </ul>
              </nav>
            </div>
          </header><!--/.main-header -->

          <!-- Section: EP -->
          <section class="z-albums zone bg" id="s-albums" data-anchor="z-albums">
            <div class="content-wrapper">
              <header>
                <h1 class="title">EP - Hokins</h1>
              </header>

              <div class="zone-body">
                <div class="media">
                  <div class="img-wrapper">
                    <img src="/<?php print path_to_theme(); ?>/tp/img/medias/albums/HOKINS_EPochette.jpg" alt="EP - Hokins" />
                  </div>
                  <div class="media-body">
                    <h2>Le premier EP des Hokins</h2>
                    <ol class="list-number">
                      <li>So Easy <em>(3.:57)</em></li>
                      <li>WTF <em>(2.:55)</em></li>
                      <li>I Want to Do It <em>(3.:46)</em></li>
                      <li>No Man's Land <em>(3.:29)</em></li>
                      <li>Smell of Coal <em>(3.:58)</em></li>
                    </ol>
                  </div>
                </div>
              </div><!--/.zone-body -->
            </div><!--/.content-wrapper -->
          </section>

          <!-- Section: En écoute -->
          <section class="z-ecoute zone bg" id="s-ecoute" data-anchor="z-ecoute">
            <div class="content-wrapper">
              <header>
                <h1 class="title">En écoute</h1>
              </header>
              <div class="zone-body">
                <ul class="list">
                  <li>
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180689781&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                  </li>
                  <li>
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/100310595&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                  </li>
                  <li>
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/88593372&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                  </li>
                </ul>
              </div><!--/.zone-body -->
            </div><!--/.content-wrapper -->
          </section>


          <!-- Section: Vidéo clip -->
          <section class="z-videos zone" id="s-videos" data-anchor="z-videos">
            <div class="content-wrapper">
              <header>
                <h1 class="title">Hokins - Dizzy</h1>
                <span class="h2">(Clip officiel)</span>
              </header>

              <div class="zone-body txt-center">
                <iframe class="actAsDiv"
                        src="http://www.youtube.com/embed/fTCxp_Dl8w4?autoplay=0&loop=0&showinfo=0&theme=dark&color=red&controls=0&modestbranding=0&start=0&fs=1&iv_load_policy=3&wmode=transparent&rel=0"
                        frameborder="0"
                        allowfullscreen></iframe>
              </div><!--/.zone-body -->
            </div><!--/.content-wrapper -->
          </section>

          <!-- Section: Avis -->
          <section class="z-avis zone bg" id="s-avis">
            <?php print views_embed_view('avis', 'block'); ?>
          </section>

          <!-- Section: A propos -->
          <section class="z-apropos zone" id="s-apropos" data-anchor="z-apropos">
            <div class="content-wrapper">
              <header>
                <h1 class="title">A propos du Groupe</h1>
                <span class="h2">Kit Press</span>
              </header>

              <div class="zone-body">
                <div class="cms">
                  <p>
                    Du rock’n’roll énergique. Non, Hokins ne propose pas de sauver la planète mais plutôt de la secouer.
                    Lorsqu’on leur demande comment ils pourraient résumer l’esprit du groupe :
                    " C''est comme si les Queens of the Stone Age rencontraient Bloc Party ".
                    Et c’est vrai que le groupe a deux facettes, l’une préhistorique et l’autre plus urbaine.
                    Imaginez en gros les Pierrafeu découvrant une boite à rythmes ;
                    cela devrait vous donner une idée assez précise du son façonné par les Hokins.
                  </p>
                </div>
              </div><!--/.zone-body -->
            </div><!--/.content-wrapper -->
          </section>

          <!-- Section: photos -->
          <section class="z-photos zone" id="s-photos" data-anchor="z-photos">
            <?php print views_embed_view('photos', 'block'); ?>
          </section>

          <!-- Section: Dates -->
          <section class="z-dates zone bg" id="s-dates" data-anchor="z-dates">
            <?php print views_embed_view('dates', 'block'); ?>
          </section>

          <!-- Section: Contacts -->
          <footer class="footer-main zone bg" id="s-contacts" data-anchor="z-contacts" role="contentinfo">
            <div class="content-wrapper">
              <header>
                <h1 class="title">Contacts</h1>
                <span class="h2">Suivez-nous</span>
              </header>

              <div class="zone-body">
                <div class="flex-grid">
                  <div class="cell-manager">
                    <h2>Manager</h2>
                    <dl>
                      <dt>Email: </dt>
                      <dd><a href="mailto:contact.hokins@gmail.com"></a>contat.hokins@gmail.com</dd>
                    </dl>
                  </div>

                  <div class="cell-network">
                    <ul class="list-inline">
                      <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                      <li><a href="#"><span class="fa fa-soundcloud"></span></a></li>
                      <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                      <li><a href="#"><span class="fa fa-vimeo-square"></span></a></li>
                    </ul>
                  </div>

                  <div class="cell-agent">
                    <h2>Agent</h2>
                    <dl>
                      <dt>Email: </dt>
                      <dd><a href="mailto:booking.hokins@gmail.com"></a>booking.hokins@gmail.com</dd>
                    </dl>
                  </div>
                </div>

                <div class="copyright">
                  <p>
                    <strong><span class="fa fa-copyright"></span> Hokins</strong>
                    All right reserved
                  </p>
                </div>
              </div><!--/.zone-body -->
            </div><!--/.content-wrapper -->
          </footer>
        </div><!--/.page-content -->
      </div><!--/.content-main -->
    </main>
  </div><!--/#page-container -->

  <?php print render($page['footer']); ?>

</div>

<?php print render($page['bottom']); ?>
