/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function() {
	var isIe = /(trident|msie)/i.test( navigator.userAgent );

	if ( isIe && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();

/*
     FILE ARCHIVED ON 19:00:36 Apr 15, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:24:26 May 18, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 57.173 (3)
  esindex: 0.02
  captures_list: 76.429
  CDXLines.iter: 13.231 (3)
  PetaboxLoader3.datanode: 1068.058 (4)
  exclusion.robots: 0.231
  exclusion.robots.policy: 0.215
  RedisCDXSource: 1.688
  PetaboxLoader3.resolve: 27.009
  load_resource: 1060.981
*/