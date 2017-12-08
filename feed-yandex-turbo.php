<?php

$metrika = '123456789';
$rsya = 'R-A-123456-1';
 

function get_thumbnail_url()
{
	global $post;
	$image_id = @get_post_thumbnail_id($post->ID);  
	$image_url = @wp_get_attachment_image_src($image_id, 'full');
	return isset($image_url[0]) ? $image_url[0] : '';
}
function spec_chars($text)
{
 return htmlspecialchars($text, ENT_HTML5 | ENT_QUOTES);
}

function delete_sc($text)
{
    return preg_replace('#\[[^\]]+\]#is', '', $text);
}

header('Content-Type: text/xml; charset=' . get_option('blog_charset'), true);
echo '<?xml version="1.0" encoding="'.get_option('blog_charset').'"?'.'>';
?>
<rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
<channel>
	<title>RSS-фид для Яндекса с влюченным режимом "Турбо"</title>
	<link>http://site.ru</link>
	<description>Тестовое описание</description>	
	<yandex:logo>http://site.ru/images/logo-100-100.png</yandex:logo>
	<yandex:logo type="square">http://site.ru/images/logo-180-180.png</yandex:logo>
	<yandex:analytics id="<?php echo $metrika; ?>" type="Yandex"></yandex:analytics>
	<yandex:adNetwork type="Yandex" id="<?php echo $rsya; ?>"></yandex:adNetwork>
<?php
	query_posts("cat=5&showposts=25");
	while( have_posts()) : the_post(); $category = get_the_category(); ?>
	<item turbo="true">
		<title><?php echo spec_chars($post->post_title) ?></title>
		<link><?php the_permalink_rss() ?></link>
		<pdalink><?php the_permalink_rss() ?></pdalink>
		<author><?php the_author(); ?></author>
		<category><? echo spec_chars($category[0]->cat_name); ?></category>
		<pubDate><?php echo mysql2date('D, d M Y H:i:s +0300', get_post_time('Y-m-d H:i:s'), false); ?></pubDate>
		<yandex:genre>message</yandex:genre>	
		<yandex:full-text><?php echo spec_chars(strip_tags(delete_sc(apply_filters('the_content_rss', $post->post_content)), ENT_QUOTES))?></yandex:full-text>		
<?php

	if($thumb = get_thumbnail_url()){
?>
		<enclosure url="<?php echo $thumb ?>" type="image/jpeg" />				
<?php }



	$tags = wp_get_post_tags($post->ID);
	
	foreach($tags as $tag)
	{ ?>
		<yandex:tags><?php echo spec_chars($tag->name); ?></yandex:tags>
<?php	}

?>
    <guid isPermaLink="false"><?php the_guid(); ?></guid>
	</item>
	<?php endwhile; 
	wp_reset_query();
	?>
</channel>
</rss>
