function getVariantFromOptions(){let s=[];return $(".product-category select").map(function(i,t){variant={value:$(t).val(),index:$(t).data("index")},s.push(variant)}),s}function updateHistoryState(s){if(history.replaceState&&s){var i=window.location.protocol+"//"+window.location.host+window.location.pathname+"?variant="+s.id;window.history.replaceState({path:i},"",i)}}jQuery(document).ready(function(){jQuery(".toggle-menu").on("click",function(){jQuery(".menu").toggleClass("openSesame"),jQuery(this).toggleClass("active")}),jQuery(".toggle").on("click",function(){jQuery(".menu-hide").removeClass("show"),jQuery(".menu-tab").removeClass("active")});var s=jQuery(".hamburger");s.on("click",function(i){s.toggleClass("is-active")})}),$(".btn.edit-address").click(function(){$(this).hide(),$(this).parents("td").siblings(".address-edit").show(),$(this).siblings(".btn.edit-address-cancel").show(),$(this).siblings(".btn.edit-address-submit").show(),$(this).siblings(".btn.delete-address").hide(),$(this).parents("td").siblings(".address-record").hide()}),$(".btn.edit-address-submit").click(function(){$(this).hide(),$(this).parents("td").siblings(".address-edit").hide(),$(this).siblings(".btn.edit-address-cancel").hide(),$(this).siblings(".btn.edit-address").show(),$(this).siblings(".btn.delete-address").show(),$(this).parents("td").siblings(".address-record").show()}),$(".btn.edit-address-cancel").click(function(){$(this).hide(),$(this).parents("td").siblings(".address-edit").hide(),$(this).siblings(".btn.edit-address-submit").hide(),$(this).siblings(".btn.edit-address").show(),$(this).siblings(".btn.delete-address").show(),$(this).parents("td").siblings(".address-record").show()}),$(".carousel").carousel(),$(".single-product-images").slick({slidesToShow:1,slidesToScroll:1,dots:!0,customPaging:function(s,i){var t;return`<a><img class="img-fluid" src=${$(s.$slides[i]).find("div[data-thumb]").data("thumb")} /></a>`},responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".product-category select").on("change",function(){var s=getVariantFromOptions(),i=window.product.variants,t=_.find(i,function(i){return s.every(function(s){return _.isEqual(i[s.index],s.value)})});updateHistoryState(t),$("#variant-id").val(t.id)});