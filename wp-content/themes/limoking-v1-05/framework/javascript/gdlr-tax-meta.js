(function($){
	$(document).ready(function(){

		// animate upload button
		$('.limoking-option-input .limoking-upload-box-input').change(function(){		
			$(this).siblings('.limoking-upload-box-hidden').val($(this).val());
			if( $(this).val() == '' ){ 
				$(this).siblings('.limoking-upload-img-sample').hide(); 
			}else{
				$(this).siblings('.limoking-upload-img-sample').attr('src', $(this).val()).removeClass('blank');
			}
		});
		$('.limoking-upload-media').click(function(){
			var upload_button = $(this);
		
			var custom_uploader = wp.media({
				title: upload_button.attr('data-title'),
				button: { text: upload_button.attr('data-button') },
				library : { type : 'image' },
				multiple: false
			}).on('select', function() {
				var attachment = custom_uploader.state().get('selection').first().toJSON();
				
				upload_button.siblings('.limoking-preview').attr('src', attachment.url).show();
				upload_button.siblings('.limoking-upload-box-input').val(attachment.url);
				upload_button.siblings('.limoking-upload-box-hidden').val(attachment.id);
			}).open();			
		});	
		
		// datepicker
		$('.limoking-date-picker').datepicker({
			dateFormat : 'yy-mm-dd',
			changeMonth: true,
			changeYear: true 
		});		
		
		// colorpicker
		$('.wp-color-picker').wpColorPicker();	
	
	});
})(jQuery);